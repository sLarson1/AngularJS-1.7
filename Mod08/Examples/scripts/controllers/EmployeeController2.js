empApp.controller('EmployeeController', ['$scope', 'EmployeeFactory', function($scope, EmployeeFactory){
    $scope.employees = EmployeeFactory.getEmployees();
}]);