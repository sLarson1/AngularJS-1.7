myApp.controller('MainController', ['$scope', '$window',
  function ($scope, $window) {
      $scope.message = 'Hello World!';

      $scope.showMessage = function (message) {
          $window.alert(message);
      };
  }]);
