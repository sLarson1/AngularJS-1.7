myApp.controller('OrderController', ['$scope', '$routeParams', 'CustomerService', function ($scope, $routeParams, CustomerService) {
    
        var customerID = $routeParams.customerID;

        //$scope.orders = null;
        $scope.customer = null;

        $scope.customer = CustomerService.getCustomer(customerID);
    console.log($scope.customer);
        $scope.orders = $scope.customer.orders;
        getOrdersTotal();
        

                                   
        function getOrdersTotal() {
            var total = 0;
            for (var i = 0, len = $scope.orders.length; i < len; i++) {
                console.log(i);
                total += $scope.orders[i].orderTotal;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 2500) ? 'success' : 'danger';
        }
        
    
    
}]);