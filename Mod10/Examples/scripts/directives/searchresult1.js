app.directive('searchResult', function(){
    return {
         restrict: 'EA',
         template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">ACME Corp.</h4><p class="list-group-item-text">123 Main St., Boston, MA 02108</p></a>'
     };
});
