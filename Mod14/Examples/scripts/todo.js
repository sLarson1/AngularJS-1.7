var myApp = angular.module('toDoApp', ['ngAnimate']);

myApp.controller('MainController', ['$scope', function($scope) {
 $scope.toDos = [
    "Mow Lawn",
    "Pickup Birthday Cake",
    "Write Thank You Notes"
  ];
  
 $scope.addToDo = function () {
       $scope.toDos.push($scope.toDo);
       $scope.toDo = '';
  }; 
  
  $scope.removeToDo = function (index) {
          $scope.toDos.splice(index, 1);
      };
}]);