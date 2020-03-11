var app = angular.module('myApp', ['ngNotificationsBar']);

app.config(['notificationsConfigProvider', function(notificationsConfigProvider) {
    notificationsConfigProvider.setHideDelay(3000);
    notificationsConfigProvider.setAutoHide(true);
}]);

app.controller('MainController', ['$scope', 'notifications', function($scope, notifications) {
    
	$scope.showError = function() {
        notifications.showError('Oops! You did something wrong.');
    };

    $scope.showWarning = function() {
        notifications.showWarning('Hey! This requires your attention.');
    };

    $scope.showSuccess = function() {
        notifications.showSuccess('Good Job! You did something right.');
    };

    $scope.closeAll = function() {
        notifications.closeAll();
    };
}]);