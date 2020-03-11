var app = angular.module('cityApp', []);
app.controller('CityController', function($scope){
    $scope.cities = ['london', 'new york', 'tokyo', 'paris', 'rio'];
    
});