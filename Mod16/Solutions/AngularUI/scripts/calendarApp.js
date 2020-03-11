var app = angular.module('calendarApp', ['ui.calendar', 'ui.bootstrap']);

app.controller('MainController', ['$scope', '$compile', function($scope, $compile) {

    $scope.eventSource = {
        events: [{
            title: 'Open House',
            start: '2016-09-07',
			desc: 'Open house at 1 Woodridge Ave. Brick 2 story with garage.'
        }, {
            title: 'Birthday Party',
            start: '2016-08-11',
			desc: 'Birthday party for John. Bring potato salad.'
        }],
        backgroundColor: '#cc0000',
        textColor: '#FFFFFF'
    };

    $scope.eventRender = function(event, element, view) {
        element.attr('tooltip', event.title);
        element.attr({
            'tooltip': event.desc,
            'tooltip-append-to-body': true
        });
        $compile(element)($scope);
    };

    $scope.uiConfig = {
        calendar: {
			height: 450,
            eventRender: $scope.eventRender
        }
    };
}]);