var myApp = angular.module('myApp', ['ngRoute']);

// Configure routes
// This configuration is referred to as a "route table"
myApp.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
          templateUrl: 'scripts/views/productsview.html',
          controller: 'ProductsController'
      })
       .when('/home', {
           templateUrl: 'scripts/views/productsview.html',
           controller: 'ProductsController'
       })
        .when('/about', {
            templateUrl: 'scripts/views/aboutusview.html',
            controller: 'AboutUsController'
        })
      .when('/contact', {
          templateUrl: 'scripts/views/contactusview.html',
          controller: 'ContactUsController'
      })

      .otherwise({ redirectTo: '/' });

});
