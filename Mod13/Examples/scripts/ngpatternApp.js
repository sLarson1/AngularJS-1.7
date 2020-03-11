var app = angular.module('myApp', []);
app.controller('myController', ['$scope', function($scope) {

    $scope.formValid = function(valid) {
        if (valid) {
            alert('You submitted a number.');
        } else {
            alert('Submitted without adding a number.')
        }
    };
}]);