(function () {
    "use strict";

    var app = angular.module('northwindApp');
    
    app.factory('productService', ['$http', '$resource',
        function ($http, $resource) {

        //todo: configure the $resource service for the products url
        var products = $resource('/api/products/:id',
                {},
                {
                    'update': {'method':'PUT'}
                });

        return {
            getProducts: function () {
                //todo: get all products
                return products.query();
            },
            getProduct: function (productId) {
                //todo: get a single product
                return products.get({id:productId});
            },
            addProduct: function (product) {
                //todo: insert product
                return products.save({},product);
            },
            updateProduct: function (productId, product) {
                //todo: update product
                return products.update({id:productId}, product);
            },
            deleteProduct: function (productId) {
                //todo: delete product
                return products.delete({id:productId});
            }

        };
    }]);
})();
