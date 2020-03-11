app.directive("searchResult", function() {
   return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/searchresult.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       }
   }
});
