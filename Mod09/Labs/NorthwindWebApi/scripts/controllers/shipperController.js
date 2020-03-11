(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('shipperController', ['$scope', '$location', '$routeParams', '$log','shipperService',
        function ($scope, $location, $routeParams, $log, shipperService) {

            var originalShipper = {};

            $scope.isNew = !$routeParams.shipperId;


            if ($scope.isNew) {
                $scope.shipper = {};
                $scope.formTitle = "Add new shipper";
            } else {

                //$scope.employee = {};
                $scope.formTitle = "Update shipper";

                shipperService.getShipper($routeParams.shipperId)
                    .$promise.then(function (result) {
                        originalShipper = result;
                        $scope.shipper = angular.copy(originalShipper);
                    },function(result) {
                        $log.warn(result.status);
                    });

            }

            $scope.submit = function () {

                if ($scope.isNew) {

                    //add new shipper
                    shipperService.addShipper($scope.shipper).$promise
                        .then(function(result) {
                            $location.path('/shippers');
                        },function(result) {
                            $log.warn(result.status);
                        });
                    


                } else {

                    //save existing shipper
                    shipperService.updateShipper($routeParams.shipperId, $scope.shipper).$promise
                        .then(function (result) {
                            $location.path('/shippers');
                        }, function (result) {
                            $log.warn(result.status);
                        });

                }

            };

            $scope.cancel = function () {
                $location.path('/shippers');
            };
        }
    ]);
})();