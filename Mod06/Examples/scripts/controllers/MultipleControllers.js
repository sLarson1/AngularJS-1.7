myApp.controller('EmployeeController', ['$scope', function ($scope) {
    $scope.name = 'James';
    $scope.title = 'Software Engineer';
    $scope.salary = 65000;
}]);

myApp.controller('ManagerController', ['$scope', function ($scope) {
    $scope.title = 'Technical Manager';
    $scope.salary = 105000;
}]);

myApp.controller('InternController', ['$scope', function ($scope) {
    $scope.name = 'Alexis';
    $scope.title = 'Intern';
    $scope.salary = 15000;
}]);
