(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.factory('employeeService', ['$log', '$http', function ($log, $http) {
        var employees = {};

        return {
            getEmployees: function (successCallback) {
                //todo: make HTTP GET call to return all employees
                return $http.get('/api/employees')
                            .then(function (response) {
                                      successCallback(response.data);
                                  },
                                  function (response) {
                                      $log.warn(response.data, response.status, response.headers, response.config);
                                  });
            },
            getEmployee: function (employeeId, successCallback) {
                //todo: make HTTP GET call to return a single employee
                $http.get('/api/employees/' + employeeId)
                            .then(function (response) {
                                successCallback(response.data);
                            },
                            function (response) {
                                $log.warn(response.data, response.status, response.headers, response.config);
                            });
            },
            addEmployee: function (employee, successCallback) {
                //todo: make HTTP POST call to insert an employee
                $http.post('/api/employees', employee)
                             .then(function (response) {
                                employee.employeeId = response.data;
                                successCallback();
                             },
                             function (response) {
                                 $log.warn(response.data, response.status, response.headers, response.config);
                             });
            },
            updateEmployee: function (employeeId, employee, successCallback) {
                //todo: make HTTP PUT call to modify an employee
                 $http.put('/api/employees/' + employeeId, employee)
                            .then(function (response) {
                                successCallback(response.data);
                            },
                            function (response) {
                                $log.warn(response.data, response.status, response.headers, response.config);
                            });
            },
            deleteEmployee: function (employeeId, successCallback) {
                //todo: make HTTP DELETE call to delete an employee
                $http.delete('/api/employees/' + employeeId)
                            .then(function (response) {
                                successCallback(response.data);
                            },
                            function (response) {
                                $log.warn(response.data, response.status, response.headers, response.config);
                            });
            }
        };
    }]);
})();
