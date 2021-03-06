
app.directive("searchResult", function() {
   return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/searchresult_mult1.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       },
       compile: function(elem, attrs){
            console.log('Compile phase…');
           elem.addClass('dogfood');
            console.log(elem.html());

          return {

            pre: function(scope, elements, attrs){
              console.log('Pre-link');
              console.log(elements);
            },
            post: function(scope, elements, attrs){
              console.log('Post-link');
              console.log(elements);
            }
          };
    }

   };
});
