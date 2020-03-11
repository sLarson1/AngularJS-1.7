var myApp = angular.module('carouselDemo', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('MainController', ['$scope', function($scope) {
    $scope.myInterval = 6000;
    
	$scope.slides = [{
        text: 'Grand Canyon',
        image: 'images/grand-canyon.png'
    }, {
        text: 'Yellowstone',
        image: 'images/yellowstone.png'
    }, {
        text: 'Mt. Rushmore',
        image: 'images/mt-rushmore.png'
    }];
}]);