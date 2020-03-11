app.controller('CalculatorController', ['$scope', 'MathService', 'CalculatorService', function($scope, MathService, CalculatorService) {
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.result = 0;
    
   
    $scope.add = function(){
    
        $scope.result = MathService.add(parseFloat($scope.num1),parseFloat($scope.num2));
    }
    $scope.subtract = function(){
    
        $scope.result = MathService.subtract(parseFloat($scope.num1),parseFloat($scope.num2));
    }
    $scope.multiply = function(){
    
        $scope.result = MathService.multiply(parseFloat($scope.num1),parseFloat($scope.num2));
    }
    $scope.divide = function(){
    
        $scope.result = MathService.divide(parseFloat($scope.num1),parseFloat($scope.num2));
    }
    $scope.mod = function(){
    
        $scope.result = CalculatorService.mod(parseFloat($scope.num1),parseFloat($scope.num2));
    }
    $scope.sqrt = function(){
    
        $scope.result = CalculatorService.sqrt(parseFloat($scope.num1));
    }
    
    $scope.square = function() {
    
        $scope.num2 = '';
        $scope.result = CalculatorService.square(parseFloat($scope.num1));
    }

    $scope.cube = function() {
    
        $scope.num2 = '';
        $scope.result = CalculatorService.cube(parseFloat($scope.num1));
    }
}]);