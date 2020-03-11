app.factory('MessageFactory', [function() {
  
  var myFactory = {};
  myFactory.sayHello = function(){
    return 'Hello World!';
  };
  return myFactory;
}]);
