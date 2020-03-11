app.factory('MathService', function() {
    var myFactory = {};
    myFactory.add = function(a, b) { return a + b; };
    
    myFactory.subtract = function(a, b) { return a - b; };
    
    myFactory.multiply = function(a, b) { return a * b; };
    
    myFactory.divide = function(a, b) { return a / b; };
    return myFactory;
});

