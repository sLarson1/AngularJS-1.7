var app = angular.module('myApp', []);

app.controller('CourseController', function ($scope) {
    $scope.courseTitle = 'Learning AngularJS';
    $scope.instructor = 'Dr. Tech';
    $scope.location = 'Chelmsford, MA  USA';
});
