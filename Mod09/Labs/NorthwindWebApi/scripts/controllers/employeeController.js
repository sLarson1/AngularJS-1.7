(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('employeeController', ['$scope', '$location', '$routeParams', '$http','$log', 'employeeService',
        function ($scope, $location, $routeParams, $http,$log, employeeService) {

            var originalEmployee = {};

            $scope.isNew = !$routeParams.employeeId;


            if ($scope.isNew) {
                $scope.employee = {};
                $scope.formTitle = "Add new employee";
            } else {

                $scope.formTitle = "Update employee";

                var employeeGetFunction = function(result) {
                    originalEmployee = result;
                    $scope.employee = angular.copy(originalEmployee);
                }
                employeeService.getEmployee($routeParams.employeeId, employeeGetFunction);
            }

            $scope.submit = function () {

                if ($scope.isNew) {

                    //new employee POST
                    var employeeAddCallback = function () {
                        $location.path('/employees');
                    }
                    $log.info("add new emp;"+$scope.employee);
                    employeeService.addEmployee($scope.employee, employeeAddCallback);


                } else {

                    //existing employee PUT
                    var employeeUpdateCallback = function (result) {

                        $location.path('/employees');
                        

                    };
                    $log.info("updats emp;"+$scope.employee);
                    employeeService.updateEmployee($routeParams.employeeId, $scope.employee, employeeUpdateCallback);

                }

            };

            $scope.cancel = function () {
                $location.path('/employees');
            };
        }
    ]);
})();