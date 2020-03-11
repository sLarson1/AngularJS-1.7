var app = angular.module('myApp', []);

app.controller('TimerController', function ($scope) {

    $scope.message = 'Processing...';

    setTimeout(function () {
        $scope.message = 'Process complete!';
        $scope.$apply();
    }, 3000);
});
