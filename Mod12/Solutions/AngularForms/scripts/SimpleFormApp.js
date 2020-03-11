    var myApp = angular.module('myApp', []);
    myApp.controller('SimpleController', ['$scope', function($scope) {

        $scope.languages = {
            'Java': 'J',
            'C #': 'CS',
            'PHP': 'PHP',
            'Python': 'PY',
            'Objective C': 'OC'
        };
    }]);