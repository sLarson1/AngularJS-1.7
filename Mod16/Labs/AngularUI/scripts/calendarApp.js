var myApp = angular.module('calendarApp',['ui.calendar','ui.bootstrap']);

myApp.controller('MainController', ['$scope', '$compile',
    function($scope, $compile) {

        $scope.uiConfig = {
            calendar: {
                height: 450,
                eventRender: $scope.eventRender,

                header: {
                    left: 'month basicWeek basicDay',
                    center: 'title',
                    right: 'today prev,next'
                }
            }
        };

        $scope.eventSource = {
            events: [
                {
                    title: 'Open House',
                    start: '2019-11-24',
                    desc: 'Open house at 1 Woodridge Ave. Brick 2 story with garage.',
                    backgroundColor: '#cc0000',
                    textColor: '#FFFFFF'                    
                }, {
                    title: 'Birthday Party',
                    start: '2019-12-01',
                    desc: 'Birthday party for John. Bring potato salad.',
                    backgroundColor: '#cc0000',
                    textColor: '#FFFFFF'                    
                }
        ]
        };

        $scope.eventRender = (event, element, view)=>{
            element.attr('tooltip', event.title);
            element.attr({
            'tooltip': event.desc,
            'tooltip-append-to-body': true
            });
            $compile(element)($scope);
        }

    }
]);
