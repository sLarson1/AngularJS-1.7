myApp.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService){
    $scope.orders = null;
    $scope.ordersTotal = 0.0;
    $scope.totalType;

    $scope.sortBy = 'name';
    $scope.reverse = false;
       
    $scope.customers = CustomerService.getCustomers();
    
    
    
    $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
}]);
