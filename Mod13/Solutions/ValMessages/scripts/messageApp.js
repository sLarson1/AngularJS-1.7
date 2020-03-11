var myApp = angular.module('msgApp', ['ngMessages']);
myApp.controller('myController', ['$scope', function($scope) {
    // function to call on form submit
    $scope.formValid = function(valid) {
        // check all goes fine?
        if (valid) {
            alert('This form is valid');
        }
    };
}]);
