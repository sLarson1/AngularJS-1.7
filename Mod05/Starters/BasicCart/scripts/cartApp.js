// Modal enabling html content
myApp.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
})

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'scripts/views/products.html',
            controller: 'ProductController'
        })
        .when('/cart', {
            templateUrl: 'scripts/views/cart.html',
            controller: 'CartController'
        })
    .otherwise({
        redirectTo: '/products'
    })

});
