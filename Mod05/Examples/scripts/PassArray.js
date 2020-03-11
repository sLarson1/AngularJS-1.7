app.controller('EmployeeController', ['$scope', function($scope) {
  $scope.employees = [
          {name:'Devan', phone:'800-243-9392', 
           city:'Boston', hireDate:'2014-09-02', 
           salary: 56900 },
          {name:'Nathan', phone:'800-555-2711',
           city:'Seattle', hireDate:'2012-07-27', 
           salary: 61350 },
          {name:'Ann', phone:'800-555-2720', city:'Denver', 
           hireDate:'2003-10-18', salary: 127700 },
          {name:'Grace', phone:'800-555-8289', 
           city:'Houston', hireDate:'2009-07-19', 
           salary: 68400 }];
}]);
