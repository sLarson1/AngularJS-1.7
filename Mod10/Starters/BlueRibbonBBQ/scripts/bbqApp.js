var myApp = angular.module('bbqApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'scripts/views/appetizers.html',
            controller: 'AppController'
        })
    .when('/main', {
        templateUrl: 'scripts/views/entrees.html',
        controller: 'EntreeController'
    })

    .when('/desserts', {
        templateUrl: 'scripts/views/desserts.html',
        controller: 'DessertController'
    })
     .otherwise({
         redirectTo:'/'}
      );
});

