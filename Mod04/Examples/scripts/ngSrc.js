var app = angular.module('imgApp', []);
app.controller('ImageController', function($scope){
    $scope.caption = 'Photo of London';
    $scope.img = 'london.jpg';
});