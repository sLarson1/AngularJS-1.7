(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('shippersController', ['$scope', '$location', '$routeParams', '$log','shipperService',
        function ($scope, $location, $routeParams, $log, shipperService) {

            $scope.shippers = {};

            $scope.getShippers = function (){
                
                shipperService.getShippers().$promise
                    .then(function(result) {
                        $scope.shippers = result;
                    }, function(result) {
                        $log.warn(result.status);
                    });
            }

            $scope.delete = function(shipperId) {
                var answer = confirm('This will delete the shipper. Do you wish to continue?');
                if (answer) {
                    var currentShipper = null;

                    angular.forEach($scope.shippers, function (shipper) {
                        if (shipper.ShipperId === shipperId) {
                            currentShipper = shipper;
                        }
                    });
                    
                    shipperService.deleteShipper(shipperId).$promise
                        .then(function(result) {
                            var index = $scope.shippers.indexOf(currentShipper);
                            if (index > -1) {
                                $scope.shippers.splice(index, 1);
                            }
                        }, function(result) {
                            $log.warn(result.status);
                        });

                }
            };



            $scope.getShippers();


        }
    ]);
})();