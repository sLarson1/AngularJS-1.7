app.directive('searchResult', function(){
    return {
         restrict: 'EA',
         templateUrl: 'scripts/directives/searchresult_at1.html',
         scope: {
              customerName : '@',
              customerAddress : '@'
         }
     };
});
