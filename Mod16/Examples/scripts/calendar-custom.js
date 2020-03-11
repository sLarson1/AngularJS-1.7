var myApp = angular.module('calendarAppDemo', ['ui.calendar']);

myApp.controller('MainController', ['$scope', function($scope) {

    $scope.uiConfig = {
        calendar: {
            header: {
                left: 'month basicWeek basicDay',
                center: 'title',
                right: 'today prev,next'
            }
        }
    };
    $scope.eventSource = {
        events: [{
            title: 'Open House',
            start: '2016-01-07'
        }, {
            title: 'Birthday Brunch',
            start: '2016-01-12T10:30:00',
            end: '2016-01-12T12:30:00'
        }, {
            title: 'Hair Appointment',
            start: '2016-01-12T14:00:00',
            end: '2016-01-12T15:30:00'
        }, {
            title: 'Happy Hour',
            start: '2016-01-12T16:30:00',
            end: '2016-01-12T17:30:00'
        }, {
            title: 'Conference',
            start: '2016-01-19',
            end: '2016-01-22'
        }]
    };
}]);