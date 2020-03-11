(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('productController', ['$scope', '$location', '$routeParams', '$log','productService',
        function ($scope, $location, $routeParams, $log, productService) {

            var originalProduct = {};

            $scope.isNew = !$routeParams.productId;

            if ($scope.isNew) {
                $scope.product = {};
                $scope.formTitle = "Add new product";
            } else {
                
                $scope.formTitle = "Update product";

                productService.getProduct($routeParams.productId)
                              .$promise
                              .then(function (result) {
                                       originalProduct = result;
                                       $scope.product = angular.copy(originalProduct);
                              },
                              function (result) {
                                    $log.warn(result.status);
                              });
            }

            $scope.submit = function () {
                if ($scope.isNew) {

                    //todo: add new product
                    productService.addProduct($scope.product)
                                  .$promise
                                  .then(function (result) {
                                      $location.path('/products');
                                  },
                                  function (result) {
                                      $log.warn(result.status);
                                  });
                } else {
                    //save existing product
                    productService.updateProduct($routeParams.productId, $scope.product)
                                  .$promise
                                  .then(function (result) {
                                      $location.path('/products');
                                  },
                                  function (result) {
                                    $log.warn(result.status);
                                  });
                }
            };

            $scope.cancel = function () {
                $location.path('/products');
            };
        }
    ]);
})();