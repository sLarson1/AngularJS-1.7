var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/employees',
    {
        controller: 'EmployeeController',
        templateUrl: 'scripts/views/employees.html'
    })
    .when('/customers',
    {
        controller: 'CustomerController',
        templateUrl: 'scripts/views/customers.html'
    })
    .when('/customers/:customerID',
    {
        controller: 'OrderController',
        templateUrl: 'scripts/views/orders.html'
    })
    .otherwise( {redirectTo: '/'});    
});