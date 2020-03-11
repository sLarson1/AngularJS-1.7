var app = angular.module('myApp', []);

app.controller('MainController', function ($scope) {
	
    $scope.Text = 'this is a test';
    $scope.WordLength = $scope.Text.length;    

    $scope.WordLengthStyle = {
        'color': '#ff0000'
    };

    $scope.UpdateWordLength = function () {
        $scope.WordLength = $scope.Text.length;
        console.log();
    };
});