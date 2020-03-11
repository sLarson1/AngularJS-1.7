var app = angular.module('myApp', []);

app.controller('TimerController2', function ($scope, $timeout) {

    $scope.message = 'Processing...';

    $timeout(function () {
        $scope.message = 'Process complete!';
        $scope.$apply();
    }, 3000);
});
