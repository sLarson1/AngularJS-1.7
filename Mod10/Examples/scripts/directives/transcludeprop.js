app.directive("searchResult", function() {
    return {
       restrict: 'EA',
       templateUrl: 'scripts/directives/search_transclude.html',
       scope: {
           customerObject : "=",
           formatAddressFunction : '&'
       },
       transclude: true
    };
});
