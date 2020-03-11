var app = angular.module("myApp", ['ngSanitize']);

app.controller("MainController", ['$scope', function($scope) {
    $scope.myText = "<p>This text is <strong>bolded</strong>.</p> <p>This text is <em>italicized</em>.</p>";
}]);