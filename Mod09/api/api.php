<?php
  //
  // TODO
  //   SQL data character set and data type issues

  //
  // Include Slim Framwork
  //
  use \Psr\Http\Message\ServerRequestInterface as Request;
  use \Psr\Http\Message\ResponseInterface as Response;
  
  require 'vendor/autoload.php';


  // ---------------------------------------------------------------------------------------
  //
  // Database methods for all APIs
  //
  class DbAPI {
    protected $host = 'localhost',
	      $dbname = 'northwind',
	      $user = 'root',
	      $pass = 'hott';

    function __construct(Request $request, Response $response) {
      $this->request  = $request;
      $this->response = $response;
    }

    private function e2obj($e, $msg = null) {
      if ($e)
	return [
		 'Message' => $msg ? "{$msg}: {$e->getMessage()}" : $e->getMessage(),
		 'Code' => $e->getCode()
	       ];
      else
	return [ 'Message' => $msg ];

    }

    //
    // Massage the JSON property names to agree with the database table names
    //
    private function req2db($data) {
	  foreach ($this->colMap as $newProp => $oldProp) {
	    if (isset($data[$oldProp])) {
	      $data[$newProp] = $data[$oldProp];
	      unset($data[$oldProp]);
	    }
	  }
	  //
	  // Also, check for "bad hombres"
	  //
	  foreach ($data as $col => $val) {
	    if (!in_array($col, $this->sqlColumns))
	      throw new Exception("bad column: {$col}");  // This needs more testing
	  }
	  return $data;
    }
    
    //
    // Massage the database table names and data types to agree with the JSON object
    //
    private function db2resp($data) {
      if ($this->colMap) {
	foreach ($this->colMap as $oldProp => $newProp) {
	  if (isset($data[$oldProp])) {
	    $data[$newProp] = $data[$oldProp];
	    unset($data[$oldProp]);
	  }
	}
      }
      if ($this->colInts) {
	foreach ($this->colInts as $colInt) {
	  if (isset($data[$colInt]))
	    $data[$colInt] = (integer)$data[$colInt];
	}
      }
      if ($this->colFloats) {
	foreach ($this->colFloats as $colFloat) {
	  if (isset($data[$colFloat]))
	    $data[$colFloat] = (float)$data[$colFloat];
	}
      }
      if ($this->colBools) {
	foreach ($this->colBools as $colBool) {
	  if (isset($data[$colBool]))
	    $data[$colBool] = (integer)$data[$colBool] ? true : false;
	}
      }
      return $data;
    }

    //
    // Extract id from request and verify it is a positive integer value
    //
    private function getId() {
      $id = $this->request->getAttribute('id');
      if (!$id || preg_match('/[^0-9]/', $id)) {
	// 400 Bad Request
	throw new Exception("Bad {$this->colId}: {$id}"); // Needs work
      }
      return $id;
    }

    //
    // Build SQL INSERT/REPLACE
    //
    private function buildSqlInsert($sqlVerb, $data) {
      $colList = '(';
      $valList = '(';
      $values = [];
      foreach ($data as $col => $val) {
	$colList .= "`{$col}`, ";
	$valList .= ":{$col}, ";
	$values[":{$col}"] = $val;

      }
      $colList = substr($colList, 0, -2);	// Remove trailing ', '
      $valList = substr($valList, 0, -2);	// Remove trailing ', '
      $colList .= ')';
      $valList .= ')';
      $sql = "{$sqlVerb} INTO `{$this->sqlTable}` {$colList} VALUES {$valList}";
      return [ $sql, $values ];
    }
     
    //
    // Execute SQL and return proper response
    //
    private function sqlExecute($httpVerb, $sql, $values) {
      $dbh = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->user, $this->pass);
      $sth = $dbh->prepare($sql);
      if (!$sth->execute($values))
	throw new Exception("Execute error: {$dbh->errorInfo()[2]}");
      $rows = $sth->rowCount();
      switch ($httpVerb) {
	case 'PUT':
	  break;
	case 'POST':
	  if ($id = $dbh->lastInsertId()) {
	    $location = $this->request->getUri() . '/' . $id;
	    $dbh = null;
	    $this->response = $this->response->withHeader('Location', $location);
	    // 201 Created
	    return $this->response->withStatus(201);
	  }
	  break;
	case 'DELETE':
	  if ($rows == 0) {
	    // 404 Not Found
	    //
	    // Note: technically, this does not meet the RESTful requirement that previously
	    // deleted data should also return 200.  This could be done with a seperate database table
	    // to store previously deleted ids, and a little bit of additional logic.
	    //
	    // TODO:
	    // Create "{$this->dbname}_deleted" table with one row with one column named $this->colID.
	    // Write trigger to add ID to this table on DELETE
	    // if $id not in table
	    //   return $this->response->withStatus(404);
	    //
	    return $this->response->withStatus(404);
	  }
	  break;
      }
      // 200 OK
      return $this->response;
    }
    
    //
    // Public methods to implement API
    //
    public function put() {
      try {
	$data = $this->req2db($this->request->getParsedBody());
	if (count($data) == 0) {
	  // 400 Bad Request
	  return $this->response->withJson($this->e2obj(null, 'Empty data'), 400);
	}
	//
	// Extract id from request and verify it is a positive integer value
	//
	$id = $this->getId();
	$data[$this->colId] = $id;
	//
	// Build SQL REPLACE request
	//   Note: MySQL has a REPLACE that deletes an old record before an INSERT, if necessary
	//
	list($sql, $values) = $this->buildSqlInsert('REPLACE', $data);
	//
	// Execute SQL and return proper response
	//
	return $this->sqlExecute('PUT', $sql, $values);
      }
      catch(PDOException $e) {
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'PDO Database Exception'), 500);
      }
      catch(Throwable $t) {	// PHP 7
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($t, 'Database Error Thrown'), 500);
      }
      catch(Exception $e) {	// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Exception'), 500);
      }
      catch(Error $e) {		// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Error'), 500);
      }

    }

    public function post() {
      try {
	//
	// Extract data from request and check for "issues"
	//
	$data = $this->req2db($this->request->getParsedBody());
	//
	// Post can't pick resource URL, use PUT instead
	// Should this generate an error, instead?
	// Or should we just let it go
	//
	if (isset($data[$this->colId])) {
	  unset($data[$this->colId]);
	}
	if (count($data) == 0) {
	  // 400 Bad Request
	  return $this->response->withJson($this->e2obj(null, 'Empty data'), 400);
	}
	//
	// Build SQL INSERT request
	//
	list($sql, $values) = $this->buildSqlInsert('INSERT', $data);
	//
	// Execute SQL and return proper response
	//
	return $this->sqlExecute('POST', $sql, $values);
      }
      catch(PDOException $e) {
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'PDO Database Exception'), 500);
      }
      catch(Throwable $t) {	// PHP 7
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($t, 'Database Error Thrown'), 500);
      }
      catch(Exception $e) {	// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Exception'), 500);
      }
      catch(Error $e) {		// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Error'), 500);
      }
    }

    public function delete() {
      try {
	//
	// Extract id from request and verify it is a positive integer value
	//
	$id = $this->getId();
	//
	// Build SQL request
	//
	$sql = "DELETE FROM {$this->sqlTable} WHERE {$this->colId} = :id";
	$values = [ ':id' => $id ];
	return $this->sqlExecute('DELETE', $sql, $values);
      }
      catch(PDOException $e) {
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'PDO Database Exception'), 500);
      }
      catch(Throwable $t) {	// PHP 7
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($t, 'Database Error Thrown'), 500);
      }
      catch(Exception $e) {	// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Exception'), 500);
      }
      catch(Error $e) {		// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Error'), 500);
      }
    }
    //
    // Select database data
    //
    public function get($id = false) {
      try {
	$result = [];
	//
	// Extract id from request and verify it is a positive integer value
	//
	if ($id)
	  $id = $this->getId();
	//
	// Build SQL request
	//
	$colList = join(', ', $this->sqlColumns);
	$sql = "SELECT {$colList} FROM {$this->sqlTable}";
	if ($id)
	   $sql .= " WHERE {$this->colId} = {$id}";
	else
	   $sql .= " ORDER BY {$this->colId}";
	//
	// Execute SQL and return proper response
	//
	$dbh = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->user, $this->pass);
	$sth = $dbh->query($sql);
	if(!$sth)
	  throw new Exception("Query error: {$dbh->errorInfo()[2]}");
	//
	// Collect all matching rows into the $result array
	//
	$sth->setFetchMode(PDO::FETCH_ASSOC);
	while ($row = $sth->fetch()) {
	  $result[] = $this->db2resp($row);
	}
	if ($id && count($result) == 0) {
	  // 404 Not Found
	  return $this->response->withJson($this->e2obj(null, "{$this->colId} {$id} not found"), 404);
	}
	// 200 OK
	return $this->response->withJson($id ? $result[0] : $result);
      }
      catch(PDOException $e) {
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'PDO Database Exception'), 500);
      }
      catch(Throwable $t) {	// PHP 7
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($t, 'Database Error Thrown'), 500);
      }
      catch(Exception $e) {	// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Exception'), 500);
      }
      catch(Error $e) {		// PHP 5
	// 500 Internal Server Error
	return $this->response->withJson($this->e2obj($e, 'Database Error'), 500);
      }
    }
  }
  // ---------------------------------------------------------------------------------------
  //
  // Employee API
  //
  class EmployeeAPI extends DbAPI {
    protected $sqlTable = 'employees';
    protected $sqlColumns = [ 'EmployeeID', 'FirstName', 'LastName', 'Title', 'HomePhone' ];
    
    protected $colMap = [ 'EmployeeID' => 'EmployeeId',
			  'HomePhone'  => 'Phone'];
    protected $colInts = [ 'EmployeeId', 'ReportsTo' ];
    protected $colFloats = null;
    protected $colBools = null;
    protected $colId = 'EmployeeID';
  }

  //
  // Product API
  //
  class ProductAPI extends DbAPI {
    protected $sqlTable = 'products';
    protected $sqlColumns = [ 'ProductID', 'ProductName', 'UnitPrice', 'QuantityPerUnit' ];
    
    protected $colMap = [ 'ProductID' => 'ProductId' ];
    protected $colInts = [ 'ProductID', 'SupplierID', 'CategoryID', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel' ];
    protected $colFloats = [ 'UnitPrice' ];
    protected $colBools = [ 'Discontinued' ];
    protected $colId = 'ProductID';
  }

  //
  // Shipper API
  //
  class ShipperAPI extends DbAPI {
    protected $sqlTable = 'shippers';
    protected $sqlColumns = [ 'ShipperID', 'CompanyName', 'Phone' ];
    
    protected $colMap = [ 'ShipperID' => 'ShipperId' ];
    protected $colInts = [ 'ShipperId' ];
    protected $colFloats = null;
    protected $colBools = null;
    protected $colId = 'ShipperID';
  }
  
   


  // ---------------------------------------------------------------------------------------
  //
  // URI route setup
  //
  $app = new \Slim\App;
  $c = $app->getContainer();

  //
  // Handle Slim errors.
  //
  $c['errorHandler'] = function ($c) {
    return function ($request, $response, $e) use ($c) {
      $msg = $c->get('settings')['displayErrorDetails'];
      // 500 Internal Server Errror
      return $c['response']->withJson(['Message' => $msg, 'e' => $e ], 500);
    };
  };
  $c['notAllowedHandler'] = function ($c) {
    return function ($request, $response, $allowedHttpMethods) use ($c) {
      $msg = 'Method not allowed.  Must be one of: ' . join(', ', $allowedHttpMethods);
      // 405 Method Not Allowed
      return $c['response']->withJson(['Message' => $msg], 405);
    };
  };
  $c['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
      $msg = 'URI not found';
      // 404 Not Found
      return $c['response']->withJson(['Message' => $msg], 404);
    };
  };
  $c['phpErrorHandler'] = function ($c) { // PHP 7 only
    return function ($request, $response, $e) use ($c) {
      $msg = $c->get('settings')['displayErrorDetails'];
      // 500 Internal Server Errror
      return $c['response']->withJson(['Message' => $msg], 500);
    };
  };

  //
  // Employee API
  //
  $app->get('/employees', function(Request $request, Response $response) {
    $api = new EmployeeAPI($request, $response);
    return $api->get();
  });

  $app->get('/employees/{id}', function(Request $request, Response $response) {
    $api = new EmployeeAPI($request, $response);
    return $api->get(true);
  });

  $app->put('/employees/{id}', function(Request $request, Response $response) { 
    $api = new EmployeeAPI($request, $response);
    return $api->put();
  });

  $app->post('/employees', function(Request $request, Response $response) { 
    $api = new EmployeeAPI($request, $response);
    return $api->post();
  });

  $app->delete('/employees/{id}', function(Request $request, Response $response) { 
    $api = new EmployeeAPI($request, $response);
    return $api->delete();
  });

  //
  // Product API
  //
  $app->get('/products', function (Request $request, Response $response) {
    $api = new ProductAPI($request, $response);
    return $api->get();
  });

  $app->get('/products/{id}', function (Request $request, Response $response) {
    $api = new ProductAPI($request, $response);
    return $api->get(true);
  });

  $app->put('/products/{id}', function (Request $request, Response $response) { 
    $api = new ProductAPI($request, $response);
    return $api->put();
  });

  $app->post('/products', function (Request $request, Response $response) { 
    $api = new ProductAPI($request, $response);
    return $api->post();
  });

  $app->delete('/products/{id}', function (Request $request, Response $response) { 
    $api = new ProductAPI($request, $response);
    return $api->delete();
  });
  
  //
  // Shipper API
  //
  $app->get('/shippers', function (Request $request, Response $response) {
    $api = new ShipperAPI($request, $response);
    return $api->get();
  });

  $app->get('/shippers/{id}', function (Request $request, Response $response) {
    $api = new ShipperAPI($request, $response);
    return $api->get(true);
  });

  $app->put('/shippers/{id}', function (Request $request, Response $response) { 
    $api = new ShipperAPI($request, $response);
    return $api->put();
  });

  $app->post('/shippers', function (Request $request, Response $response) { 
    $api = new ShipperAPI($request, $response);
    return $api->post();
  });

  $app->delete('/shippers/{id}', function (Request $request, Response $response) { 
    $api = new ShipperAPI($request, $response);
    return $api->delete();
  });

  //
  // Setup done, now let's do it.
  //
  //
  $app->run();
?>
