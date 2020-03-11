var myApp = angular.module('myApp', []);

myApp.controller('TVShowController', function ($scope) {

    $scope.shows = [
                        { name: 'The Big Bang Theory', network: 'CBS', year: 2007 },
                        { name: 'Lost', network: 'ABC', year: 2004 },
                        { name: 'M*A*S*H', network: 'CBS', year: 1972 },
                        { name: 'The Bob Newhart Show', network: 'CBS', year: 1972 },
                        { name: 'The Mary Tyler Moore Show', network: 'CBS', year: 1970 },
                        { name: 'The Carol Burnett Show', network: 'CBS', year: 1967 },
                        { name: 'The Dick Van Dyke Show', network: 'CBS', year: 1961 },
                        { name: 'I Love Lucy', network: 'CBS', year: 1951 },
                        { name: 'Gilligans Island', network: 'CBS', year: 1964 },
                        { name: 'Bewitched', network: 'ABC', year: 1964 },
                        { name: 'I Dream of Jeannie', network: 'NBC', year: 1963 },
                        { name: 'The Twilight Zone', network: 'CBS', year: 1959 },
                        { name: 'Mork and Mindy', network: 'ABC', year: 1978 },
                        { name: 'Star Trek', network: 'NBC', year: 1966 },
                        { name: 'Get Smart', network: 'NBC', year: 1965 },
                        { name: 'The Rockford Files', network: 'NBC', year: 1974 },
                        { name: 'Candid Camera', network: 'CBS', year: 1948 },
                        { name: 'The Ed Sullivan Show', network: 'CBS', year: 1948 },
                        { name: 'Doctor Who', network: 'BBC', year: 1963 },
                        { name: "Monty Python's Flying Circus", network: 'BBC', year: 1969 },
                        { name: 'The Flintstones', network: 'ABC', year: 1960 },
                        { name: 'The Brady Bunch', network: 'ABC', year: 1969 },
                        { name: 'The Howdy Doody Show', network: 'NBC', year: 1954 },
    ];

    $scope.newShows = function(item) {
        return item.network === 'CBS' && item.year >= 1980;
    };
});
