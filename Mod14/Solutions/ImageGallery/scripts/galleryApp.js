var app = angular.module('imgGallery', ['ngAnimate']);
app.controller('MainController', ['$scope', function($scope) {

    $scope.photos = [{
        src: 'images/slide1.jpg',
        desc: 'Anaconda'
    }, {
        src: 'images/slide2.jpg',
        desc: 'Capybara'
    }, {
        src: 'images/slide3.jpg',
        desc: 'Lion'
    }, {
        src: 'images/slide4.jpg',
        desc: 'Red Panda'
    }, {
        src: 'images/slide5.jpg',
        desc: 'Seal'
    }];

    $scope._Index = 0;

    $scope.isActive = function(index) {
        return $scope._Index === index;
    };

    $scope.showPrev = function() {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    $scope.showNext = function() {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

   $scope.showPhoto = function(index) {
        $scope._Index = index;
    };
}]);