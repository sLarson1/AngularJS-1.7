var app = angular.module('toDoApp', []);
app.controller('TaskController', ['$scope', function($scope) {
    $scope.tasks = [];
    $scope.addItem = function () {
        $scope.tasks.push($scope.item);
        $scope.item='';
    }
    $scope.deleteItem = function () {
        $scope.tasks.splice(this.$index, 1);
    }
}]);