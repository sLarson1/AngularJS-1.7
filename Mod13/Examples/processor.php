
<html>
<head>
  <title>Processor</title>
</head>
<body>
<?php   


if($_GET){
	$elems = $_GET;
}
else{
	$elems = $_POST;
}
  // print all elements
  print "<p>" ;
  foreach ($elems as $key => $value) {
    print "<i>Key:</i>&nbsp; $key &nbsp; &nbsp;
           <i>Value:</i>&nbsp; $value<br/>";
  }
  print "</p>" ;


?>
</body>
</html>
