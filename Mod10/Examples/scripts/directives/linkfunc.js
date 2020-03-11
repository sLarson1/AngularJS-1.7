app.directive("searchResult", function() {
    return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/searchresult_mult1.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       },
       link: function(scope, elements, attrs){
              console.log('Post-link');
              console.log(scope);
              if(scope.customerObject.city == 'Boston'){
                elements.addClass('gosox');
              }
              console.log(elements);
            }
       };
   
});
