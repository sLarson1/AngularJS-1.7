myApp.controller('CourseController', ['$scope',  function ($scope) {

    $scope.courses = [
        { id: 1, name: 'HTML/CSS', description: 'This course introduces the fundamentals of building web sites using HTML and CSS.', duration: '5 days' },
        { id: 2, name: 'JavaScript', description: 'This course introduces the fundamentals of building web sites using JavaScript.', duration: '3 days' },
        { id: 3, name: 'jQuery', description: 'This course introduces the fundamentals of building web sites using jQuery.', duration: '3 days' },
        { id: 4, name: 'Bootstrap', description: 'This course introduces the fundamentals of designing a web site using Bootstrap.', duration: '2 days' },
        { id: 5, name: 'AngularJS', description: 'This course introduces the fundamentals of building AngularJS applications.', duration: '4 days' }
    ];

}]);