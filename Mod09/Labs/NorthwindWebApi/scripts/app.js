(function () {
    "use strict";

    var app = angular.module('northwindApp', ['ngRoute', 'ngResource']);

    app.config([
        '$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
            $httpProvider.defaults.withCredentials = true;
            $routeProvider.when('/', { templateUrl: 'scripts/views/home.html' });

            $routeProvider.when('/employees', { templateUrl: 'scripts/views/employees/list.html', controller: "employeesController" });
            $routeProvider.when('/employees/new', { templateUrl: 'scripts/views/employees/edit.html', controller: "employeeController" });
            $routeProvider.when('/employees/:employeeId/edit', { templateUrl: 'scripts/views/employees/edit.html', controller: "employeeController" });

            $routeProvider.when('/products', { templateUrl: 'scripts/views/products/list.html', controller: "productsController" });
            $routeProvider.when('/products/new', { templateUrl: 'scripts/views/products/edit.html', controller: "productController" });
            $routeProvider.when('/products/:productId/edit', { templateUrl: 'scripts/views/products/edit.html', controller: "productController" });

            $routeProvider.when('/shippers', { templateUrl: 'scripts/views/shippers/list.html', controller: "shippersController" });
            $routeProvider.when('/shippers/new', { templateUrl: 'scripts/views/shippers/edit.html', controller: "shipperController" });
            $routeProvider.when('/shippers/:shipperId/edit', { templateUrl: 'scripts/views/shippers/edit.html', controller: "shipperController" });
        }
    ]);

})();
