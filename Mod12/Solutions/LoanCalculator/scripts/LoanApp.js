var app = angular.module('loanApp', []);
app.controller('LoanController', function($scope) {

        $scope.amount = 5000;
        $scope.term = 24;
        
        var years;
        var amount;
        
        $scope.$watch('amount', 
		  function(value) {
           amount = value;
           totalCalc(years,amount);
        });
        
        $scope.$watch('term', 
		  function(value) {
           years = value / 12;
           totalCalc(years,amount);
        });
        
       function totalCalc(years, amount) {
            calc = (((amount * 4 * years) /1200)/12) + (amount / (years*12));
            $scope.total = calc;
			
			calc2 = (((amount * 1.99 * years) /1200)/12) + (amount / (years*12));
            $scope.total2 = calc2;
        }
        
   });
	

	