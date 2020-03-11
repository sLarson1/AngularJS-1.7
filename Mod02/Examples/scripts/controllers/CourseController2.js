var app = angular.module('myApp', []);

app.controller('CourseController2', function ($scope) {
    $scope.courseTitle = 'Learning AngularJS';
    $scope.instructor = 'Dr. Tech';
    $scope.location = 'Chelmsford, MA  USA';

    $scope.setLocation = function (newLocation) {
        $scope.location = newLocation;
    };
});