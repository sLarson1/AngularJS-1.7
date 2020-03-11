var myApp = angular.module('leafletDemo', ['nemLogging', 'ui-leaflet']);

myApp.controller('MainController', ['$scope', function($scope) {
    var mainMarker = {
        lat: 42.600268,
        lng: -71.349068,
        focus: true,
        message: "HOTT Headquarters"
    };
    angular.extend($scope, {
        center: {
            lat: 42.600268,
            lng: -71.349068,
            zoom: 18
        },
        markers: {
            mainMarker: angular.copy(mainMarker)
        }
    });
}]);