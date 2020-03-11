var myApp = angular.module('myApp', []);

myApp.controller('Parent1Controller', ['$scope', function ($scope) {

    $scope.message = 'This message is from Parent1';

}]);

myApp.controller('Child1Controller', ['$scope', function ($scope) {

    $scope.message = 'This message is from Child1';
    
}]);

myApp.controller('Parent2Controller', ['$scope', function ($scope) {

    $scope.message = 'This message is from Parent2';

}]);

myApp.controller('Child2Controller', ['$scope', function ($scope) {

    $scope.message = 'This message is from Child2';

}]);
