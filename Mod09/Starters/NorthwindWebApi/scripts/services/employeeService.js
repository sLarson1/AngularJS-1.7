(function () {
    "use strict";

    var app = angular.module('northwindApp');

    app.factory('employeeService', ['$log', function ($log) {
        var employees = {};

        return {
            getEmployees: function (successCallback) {
                //todo: make HTTP GET call to return all employees
                
            },
            getEmployee: function (employeeId, successCallback) {
                //todo: make HTTP GET call to return a single employee
                
               
            },
            addEmployee: function (employee, successCallback) {
                //todo: make HTTP POST call to insert an employee
                
            },
            updateEmployee: function (employeeId, employee, successCallback) {
                //todo: make HTTP PUT call to modify an employee
                
            },
            deleteEmployee: function (employeeId, successCallback) {
                //todo: make HTTP DELETE call to delete an employee
                
            }

        };
    }]);
})();