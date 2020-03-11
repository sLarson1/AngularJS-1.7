(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.controller('employeesController', ['$scope', '$location', '$routeParams',
        function ($scope, $location, $routeParams) {

            $scope.employees = {};

            $scope.getEmployees = function (){
                var employeesGetSuccess = function(data) {
                    employeeService.employees = data;
                    $scope.employees = employeeService.employees;
                }

                employeeService.getEmployees(employeesGetSuccess);
            }

            $scope.delete = function(employeeId) {
                var answer = confirm('This will delete the employee. Do you wish to continue?');
                if (answer) {
                    var currentEmployee = null;

                    angular.forEach($scope.employees, function (employee) {
                        if (employee.EmployeeId === employeeId) {
                            currentEmployee = employee;
                        }
                    });
                    
                    var employeeDeleteSuccess = function (data) {

                        var index = $scope.employees.indexOf(currentEmployee);
                        if (index > -1) {
                            $scope.employees.splice(index, 1);
                        }

                    }
                    employeeService.deleteEmployee(employeeId,employeeDeleteSuccess);

                }
            };



            $scope.getEmployees();


        }
    ]);
})();