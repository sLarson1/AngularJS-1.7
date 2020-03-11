app.service('CalculatorService', ['MathService', function(MathService){
    
    
    this.square = function(a) { return MathService.multiply(a,a); };
    
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
    
    this.mod = function(a, b) { return a % b; };
    
    this.sqrt = function(a) { return Math.sqrt(a); };
}]);
