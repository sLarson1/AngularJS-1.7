var myApp = angular.module('myApp', []);

myApp.controller('Parent1Controller', ['$scope', function ($scope) {

    $scope.parentData = {};
    $scope.parentData.message = 'This message is from Parent1';

}]);

myApp.controller('Child1Controller', ['$scope', function ($scope) {

    $scope.childData = {};
    $scope.childData.message = 'This message is from Child1';

}]);

