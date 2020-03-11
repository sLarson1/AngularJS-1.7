(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('productsController', ['$scope', '$location', '$routeParams', '$log','productService',
        function ($scope, $location, $routeParams, $log, productService) {

            $scope.products = {};

            $scope.getProducts = function (){
                //todo: add method call to the productService.getProducts function
                productService.getProducts()
                              .$promise
                              .then(function (result) {
                                  $scope.products = result;
                              },
                              function (result) {
                                  $log.warn(result.status);
                              });
            }

            $scope.delete = function(productId) {
                var answer = confirm('This will delete the product. Do you wish to continue?');
                if (answer) {
                    var currentProduct = null;

                    angular.forEach($scope.products, function (product) {
                        if (product.ProductId === productId) {
                            currentProduct = product;
                        }
                    });
                    
                    productService.deleteProduct(productId)
                                  .$promise
                                  .then(function(result) {
                                        var index = $scope.products.indexOf(currentProduct);
                                        if (index > -1) {
                                            $scope.products.splice(index, 1);
                                        }
                                   },
                                   function (result) {
                                        $log.warn(result.status);
                                   });
                }
            };

            $scope.getProducts();
        }
    ]);
})();