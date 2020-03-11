var app = angular.module('loanApp', []);
app.controller('LoanController', ['$scope', function($scope) {

    
       function totalCalc(years, amount) {
            calc = (((amount * 4 * years) /1200)/12) + (amount / (years*12));
            $scope.total = calc;
			
			calc2 = (((amount * 1.99 * years) /1200)/12) + (amount / (years*12));
            $scope.total2 = calc2;
        }
        
   }]);
	
