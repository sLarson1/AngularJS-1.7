var app = angular.module('pageTransitionApp', ['ngAnimate','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    })

    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactController'
    })
	
	 .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController'
    });
});

app.controller('HomeController', ['$scope', function($scope){
  $scope.pageClass = 'home';
}]);

app.controller('ContactController', ['$scope', function($scope){
  $scope.pageClass = 'contact';
}]);

app.controller('AboutController', ['$scope', function($scope){
   $scope.pageClass = 'about';
}]);