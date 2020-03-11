var app = angular.module('ifApp', []);

app.controller('MainController', function($scope) {

  $scope.mute = true;

  // Toggles the button
  $scope.muteToggle = function() {

    $scope.mute = !$scope.mute;

  };
  

});