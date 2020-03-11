app.filter('charLimit', function(){
  return function(input, numChars){
    return (input.length > numChars) ? input.substring(0, numChars) 
            :input;
  }
});