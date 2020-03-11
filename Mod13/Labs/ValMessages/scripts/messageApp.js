var myApp = angular.module('msgApp', ['ngMessages']);

myApp.controller('myController',['$scope', function($scope){
        $scope.formValid = function(valid){
            if(valid){
                alert('The form is valid, yo!');
            }
        };
    }
    ]);