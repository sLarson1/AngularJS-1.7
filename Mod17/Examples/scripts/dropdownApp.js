var app = angular.module('dropdownApp', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.config(function($dropdownProvider) {
    angular.extend($dropdownProvider.defaults, {
        html: true,
		animation: 'am-flip-x'
    });
});

app.controller('MainController', ['$scope', function($scope) {
    $scope.dropdown = [{
        text: '<span class="glyphicon glyphicon-phone"></span> Contact Us',
        href: '#',
    }, {
        divider: true
    }, {
        text: '<span class="glyphicon glyphicon-info-sign"></span> About Us',
        href: '#'
    }, {
        divider: true
    }, {
        text: '<span class="glyphicon glyphicon-question-sign"></span> FAQ',
        href: '#'
    }];
}]);