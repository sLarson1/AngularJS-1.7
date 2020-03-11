empApp.controller('EmployeeController', ['$scope', 'EmployeeService', function($scope, EmployeeService){
    $scope.employees = EmployeeService.getEmployees();
}]);