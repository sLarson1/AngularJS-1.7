var myApp = angular.module('myApp', []);

myApp.controller('EmployeeController', function ($scope) {

    $scope.employees = [
           { name: 'Natalie', jobTitle: 'Technical Writer', pay: 67521.25, city: 'Ft. Worth', startDate: '2005-06-25' },
           { name: 'Brittany', jobTitle: 'Supervisor', pay: 68580.00, city: 'Ft. Worth', startDate: '2006-04-17' },
           { name: 'Zachary', jobTitle: 'Construction Engineer', pay: 74115.75, city: 'Houston', startDate: '2016-01-14' }
    ];

});
