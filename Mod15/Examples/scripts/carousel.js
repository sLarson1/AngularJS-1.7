var myApp = angular.module('carouselDemo', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('MainController', ['$scope', function($scope) {
$scope.myInterval = 3000;

$scope.slides = [];
$scope.slides.push({
  text: 'Grand Canyon',
  image: 'images/grand-canyon.png'
});
$scope.slides.push({
  text: 'Yellowstone',
  image: 'images/yellowstone.png'
});
$scope.slides.push({
  text: 'Mt. Rushmore',
  image: 'images/mt-rushmore.png'
});

}]);
