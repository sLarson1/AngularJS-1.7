var myApp = angular.module('calendarAppDemo', ['ui.calendar']);

myApp.controller('MainController', ['$scope', function($scope) {
	
	$scope.eventSource = {
        events: [{
                title: 'Open House',
                start: '2016-01-07'
            }, {
                title: 'Birthday Party',
                start: '2016-01-11'
            }
        ],
		backgroundColor: '#cc0000',
		textColor: '#FFFFFF'
    };
}]);