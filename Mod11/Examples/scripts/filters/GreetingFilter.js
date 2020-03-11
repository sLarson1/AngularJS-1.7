app.config(function($provide, $filterProvider){
  
  // Create a service to demonstrate injection
  $provide.value('greetService', function(name){
    return 'Hello ' + name + '!';
  });
  
  // Register a filter factory which uses the
  // service named greetService to demonstrate DI.
  $filterProvider.register('greet', function(greetService) {
    // Return the filter function that uses greetService
    // to generate the salutation
    return function(input) {
      //Define the filter function
      var result = 'Who\'s there?';
      if (input) {
        result = greetService(input);
      }
      return result;
    };
  });
  
});
