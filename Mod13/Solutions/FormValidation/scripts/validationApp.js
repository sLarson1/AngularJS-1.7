var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope) {

    $scope.formValid = function(valid) {

        if (valid) {
            alert('This form is valid');
        }
    };

 });
