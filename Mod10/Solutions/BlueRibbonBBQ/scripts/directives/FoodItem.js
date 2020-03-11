myApp.directive('foodItem', function () {
    return{
    restrict: 'E',
    scope: {
      
        obj:"="
    },
    templateUrl: 'scripts/directives/fooditem.html'
};
});