app.directive('searchResult', function(){
    return {
         restrict: 'EA',
         templateUrl: 'scripts/directives/searchresult_at2.html',
         scope: {
              name : '@companyName',
              address : '@companyAddress'
         }
     };
});

