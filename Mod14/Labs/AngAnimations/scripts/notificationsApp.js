var app = angular.module('myApp',['ngNotificationsBar']);

app.config(['notificationsConfigProvider', function(notificationsConfigProvider) {
    notificationsConfigProvider.setHideDelay(3000);
    notificationsConfigProvider.setAutoHide(true);
}]);

app.controller('MainController',['$scope','notifications','$log', 
    ($scope,notifications,$log) => {

    $scope.showError = ()=>{
        notifications.showError('Oops! You did something wrong.');
    };

    $scope.showWarning = ()=>{
        notifications.showWarning('Hey! This requires your attention.');
    };

    $scope.showSuccess = ()=>{
        notifications.showSuccess('Good Job! You did something right.');
    };

    $scope.closeAll = ()=>{
        notifications.closeAll('Good Job! You did something right.');
    };


}]);