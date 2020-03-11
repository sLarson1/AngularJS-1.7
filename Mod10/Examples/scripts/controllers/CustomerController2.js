app.controller('CustomerController', function($scope){

  $scope.customer = {
                      name : 'ACME Corp.',
                      address : '123 Main St.',
                      city : 'Boston',
                      state : 'MA',
                      zip : '02108'
  }
  $scope.formatAddress = function(company){
    
      return company.address + ' ' + company.city + ', ' + 
           company.state + ' ' + company.zip;
  }
});
