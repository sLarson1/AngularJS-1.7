
myApp.controller('CountryController', ['$scope', function($scope) {

    $scope.locations = [
     { country: 'Bahamas', countryAbbrev: "BS" },
     { country: 'Mexico', countryAbbrev: "MX" },
     { country: 'Costa Rica', countryAbbrev: "CR" }
    ];

    $scope.selectedLocation = 'N/A';

}]);
