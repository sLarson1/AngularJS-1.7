var app = angular.module('sharedScopeApp', []);

app.controller('ScopeController', ['$scope', function($scope){
  $scope.name = 'John';
  $scope.reverseName = function(){
    $scope.name = $scope.name.split('').reverse().join('');
  };
}]);

app.directive('myDirective', function(){
  return {
    restrict: "EA",
    scope: false,
    template: '<div>Directive scope: {{name}}</div>' + 
      'Change your name : <input type="text" ng-model="name" />'
  };
});
