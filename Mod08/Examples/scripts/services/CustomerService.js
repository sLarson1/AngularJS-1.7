app.factory('CustomerService', ['$http', function($http){
  var myFactory = {};
  myFactory.getCustomers = function(records){
        return $http.get("http://www.w3schools.com/angular/customers_mysql.php");
     

  };
  return myFactory;

}]);
