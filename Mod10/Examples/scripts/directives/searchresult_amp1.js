app.directive("searchResult", function() {
   return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/searchresult_amp1.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       }
   }
});
