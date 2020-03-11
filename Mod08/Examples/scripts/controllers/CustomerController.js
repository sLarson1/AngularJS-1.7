
app.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService){
    CustomerService.getCustomers().then(function (response) {$scope.customers = response.data.records;});

}]);