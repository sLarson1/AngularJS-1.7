var app = angular.module('datepickerApp', ['ngAnimate', 'mgcrea.ngStrap']);

app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
   autoclose:'true',
   iconLeft:'glyphicon glyphicon-arrow-left',
   iconRight:'glyphicon glyphicon-arrow-right',
   daysOfWeekDisabled:'06'
  });
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
}]);