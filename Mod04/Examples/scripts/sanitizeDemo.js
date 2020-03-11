var app = angular.module('bindApp',['ngSanitize']);
app.controller('MainController', function($scope){
	$scope.cityImage = '<img src="images/cities/new-york.jpg"/>';
});