angular.module('mortgageApp', []);
angular.module('mortgageApp').controller('MortgageController', function ($scope) {
      $scope.loanAmount = 0;
      $scope.interestRate = 0;
      $scope.loanLength = 0;

      $scope.calculateMonthlyPayment = function (amt, ir, yrs) {
          var mir, np, pmt;
          mir = ir / 1200;
          np = yrs * 12;
          pmt = (amt * mir) / (1 - (Math.pow(1 + mir, -np)));
          $scope.monthlyPayment = pmt;
      };
  });
