var myApp = angular.module('carouselDemo', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('MainController', ['$scope', function($scope) {
    $scope.myInterval = 6000;
}]);