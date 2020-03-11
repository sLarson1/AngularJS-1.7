var app = angular.module('modalAppDemo', ['ngAnimate','ngSanitize','mgcrea.ngStrap']);

app.config(function($modalProvider) {
  angular.extend($modalProvider.defaults, {
    html: true
  });
})
app.controller('MainController', ['$scope', '$modal', function($scope, $modal) {
    $scope.modal = {
        title: 'Specials',
        content: '<p><img src="images/hamburger.png" class="img-thumbnail pull-left offset2"><strong>The Works Hamburger:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis mollis massa, in egestas justo mollis eu. Cras ac sodales odio, egestas efficitur odio. </p>'
    };
}]);