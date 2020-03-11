var app = angular.module('tooltipApp', ['ngAnimate','mgcrea.ngStrap']);

app.controller('MainController', ['$scope', function($scope) {
    $scope.tooltip = {};
}]);