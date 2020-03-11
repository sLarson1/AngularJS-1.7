
app.directive("searchResult", function() {
   return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/searchresult_mult1.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       }
   }
});
