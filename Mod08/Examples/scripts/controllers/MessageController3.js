app.controller('MessageController', ['$scope', 'Message', 
function ($scope, Message) {
  $scope.message = Message.sayHello();
}]);
