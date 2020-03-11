var myApp = angular.module('chartAppDemo', ['ui.chart']);

myApp.controller('MainController', ['$scope', function($scope) {
    $scope.data = [
        [
            ['Comedy', 20],
            ['Drama', 10],
            ['Thriller', 15],
            ['Action', 25],
            ['Romance', 30]
        ]
    ];
    $scope.chartOptions = {
        seriesDefaults: {
            renderer: jQuery.jqplot.PieRenderer,
            rendererOptions: {
                showDataLabels: true
            },
            seriesColors: ["#00a600", "#0070a6", "#ff008c", "#fbd700", "#ff8b00"],
            shadow: false
        },
        legend: {
            show: true,
            location: 'e',
            fontSize: '12pt',
            background: '#FFFFFF',
            fontFamily: 'Verdana'
        },
        grid: {
            background: '#000000',
			borderColor: '#00a600',
			borderWidth: '5'
        }
    };
}]);