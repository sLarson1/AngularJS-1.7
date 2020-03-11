var myApp = angular.module('myApp', []);

myApp.controller('PersonController', function ($scope) {

    // simple type
    $scope.planet = 'Earth';

    // object
    $scope.person = {
        name: 'Devan',
        age: 1
    };

    // array of simple types
    $scope.toys = ['Minnie Mouse', 'Cardboard Box', 'Rocking Horse', 'Teddy Bear'];

    // array of objects
    $scope.cousins = [
                        { name: 'Brady', age: 10 },
                        { name: 'Alexis', age: 19 },
                        { name: 'Emma', age: 6 }
    ];
});
