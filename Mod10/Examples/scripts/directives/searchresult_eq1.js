app.directive('searchResult', function(){
    return {
         restrict: 'EA',
         templateUrl: 'scripts/directives/searchresult_eq1.html',
         scope: {
              customerObject : '='
         }
     };
});
