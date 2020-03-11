app.factory('CalculatorService', ['MathService', function(MathService){
    var myFactory = {};
    
    myFactory.square = function(a) { return MathService.multiply(a,a); };
    
    myFactory.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
    
    myFactory.mod = function(a, b) { return a % b; };
    
    myFactory.sqrt = function(a) { return Math.sqrt(a); };
    return myFactory;
}]);
