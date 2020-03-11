var app = angular.module('accordionApp', ['ngAnimate']);
app.controller('MainController', ['$scope', function($scope) {
  $scope.active = true;
  $scope.active1 = true;  
}]);