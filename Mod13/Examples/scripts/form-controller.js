var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {
$scope.user = {
	first: 'Bobby', 
	last: 'Smith'
	};
}]);