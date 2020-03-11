myApp.controller('EmployeeController', ['$scope', 'EmployeeService', function($scope, EmployeeService){
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.employees = EmployeeService.getEmployees();
      $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

}]);
