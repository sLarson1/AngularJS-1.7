(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.factory('productService', ['$http', 
        function ($http) {

        //todo: configure the $resource service for the products url
        

        return {
            getProducts: function () {
                //todo: get all products
                
            },
            getProduct: function (productId) {
                //todo: get a single product
                
            },
            addProduct: function (product) {
                //todo: insert product
                
            },
            updateProduct: function (productId, product) {
                //todo: update product
                

            },
            deleteProduct: function (productId) {
                //todo: delete product
                
                
            }

        };
    }]);
})();