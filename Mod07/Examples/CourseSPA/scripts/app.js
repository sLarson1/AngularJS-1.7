var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',
                        {
                            templateUrl: 'scripts/views/main.html',
                            controller: 'MainController'
                        })
                  .when('/courses',
                        {
                            templateUrl: 'scripts/views/courses.html',
                            controller: 'CourseController'
                        })
                  .when('/courses/:id',
                        {
                            templateUrl: 'scripts/views/details.html',
                            controller: 'DetailController'
                        })
                  .when('/contact',
                        {
                            templateUrl: 'scripts/views/contact.html',
                            controller: 'ContactController'
                        }
                  )
                  .otherwise(
                        {redirectTo:'/'}
                  );
});

myApp.directive('activeLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {

            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');
                    };
                });
            });
        }
    }
}]);
