app.provider('Message', function() {
  var defaultGreeting = 'Hello';
  var defaultName = 'World';
  var defaultPunctuation = '!'
  
  this.name = defaultName;
  
  this.$get = function() {
    var name = this.name;
    return {
      sayHello: function() {
        return defaultGreeting + ' ' + name + ' ' +
               defaultPunctuation
      }
    }
  };
  this.setName = function(name) {
    this.name = name;
  };
});

