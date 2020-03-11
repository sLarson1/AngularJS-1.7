var myApp = angular.module('myApp', []);

myApp.controller('PersonController2', function ($scope) {

    // simple type
    $scope.planet = 'Earth';

    // object
    $scope.person = {
        name: 'Devan',
        age: 1
    };

    $scope.getPersonDescription = function () {
        return $scope.person.name + ' (Age: ' + $scope.person.age + ' years old)';
    };

    $scope.getPerson = function(verbose) {
        if (verbose == false)
        {
            return $scope.person.name;
        }

        return $scope.person.name + ' (Age: ' + $scope.person.age + ' years old)';
    };

    $scope.haveABirthday = function () {
        $scope.person.age++;
    };

});
