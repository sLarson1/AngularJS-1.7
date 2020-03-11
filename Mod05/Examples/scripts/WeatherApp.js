angular.module('weatherApp', []);
angular.module('weatherApp').controller('WeatherController', function ($scope) {
      $scope.temp = 0;
      $scope.windspeed = 0;
      $scope.wind_chill = 0;

      $scope.calculateWindChill = function (t, s) {
          $scope.windchill = 35.74 + 0.6215 * t + (0.4275 * t - 35.75)
                             * Math.pow(s, .16);
      };
  });
