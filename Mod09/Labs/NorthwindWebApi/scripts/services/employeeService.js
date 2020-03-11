(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.factory('employeeService', ['$http','$log', function ($http, $log) {
        var employees = {};

        return {
            getEmployees: function (successCallback) {                
                return $http.get('/api/employees').then(function(response){
                    successCallback(response.data);
                },
                function(response){
                    $log.warn(response.data, response.status, response.headers, response.config);
                }
            );
            },
            getEmployee: function (employeeId, successCallback) {
                return $http.post('/api/employees' + employeeId).then(
                    function(response){
                        successCallback(response.data);
                    },
                    function(response){
                        $log.warn(response.data, response.status, response.headers, response.config);
                    }

                );
                
               
            },
            addEmployee: function (employee, successCallback) {
                //todo: make HTTP POST call to insert an employee
                
            },
            updateEmployee: function (employeeId, employee, successCallback) {
                return $http.put('/api/employees/' + employeeId).then(
                    function(response){
                        successCallback(response.data);
                    },
                    function(response){
                        $log.warn(response.data, response.status, response.headers, response.config);
                    }

                );
            },
            deleteEmployee: function (employeeId, successCallback) {
                return $http.delete('/api/employees/' + employeeId).then(
                    function(response){
                        successCallback(response.data);
                    },
                    function(response){
                        $log.warn(response.data, response.status, response.headers, response.config);
                    }

                );
            }

        };
    }]);
})();