app.controller('CustomerController', function($scope){

  $scope.customers = [
                      {
                        name : 'ACME Corp.',
                        address : '123 Main St.',
                        city : 'Boston',
                        state : 'MA',
                        zip: '02108'
                      },
                      {
                        name : 'J & C Inc.',
                        address : '114 Technology Rd',
                        city : 'Charlotte',
                        state : 'NC',
                        zip: '28201'
                      },
                      {
                        name : 'XYZ Corp.',
                        address : '827 Network Drive',
                        city : 'Irving',
                        state : 'TX',
                        zip: '75014'
                      }
  ];
  $scope.formatAddress = function(company){
    return company.address + " " + company.city + ", " + 
           company.state + " " + company.zip;
  }
});

