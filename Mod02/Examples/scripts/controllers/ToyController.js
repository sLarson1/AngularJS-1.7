var myApp = angular.module('myApp', []);

myApp.controller('ToyController', function ($scope) {

    $scope.toys = ['Minnie Mouse', 'Cardboard Box', 'Rocking Horse', 'Teddy Bear'];

    $scope.addToy = function (newToy) {
        $scope.toys.push(newToy);
    };

});
