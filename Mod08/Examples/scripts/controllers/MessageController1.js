app.controller('MessageController', ['$scope', 'myMessageFactory', 
function ($scope, MessageFactory) {
  $scope.message = MessageFactory.sayHello();
}]);
