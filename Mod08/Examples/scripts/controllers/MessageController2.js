app.controller('MessageController', ['$scope', 'MessageService', 
function ($scope, MessageService) {
  $scope.message = MessageService.sayHello();
}]);
