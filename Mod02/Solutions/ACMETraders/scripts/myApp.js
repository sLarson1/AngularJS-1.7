var myApp = angular.module('stockApp', []);

myApp.controller('StockController', function ($scope) {

    $scope.logo = 'images/acme-logo.png';    
    $scope.today = new Date();
    $scope.customer = 'Kevin Lake';

    $scope.stock = {
        name: 'Apple',
        symbol: 'AAPL',
        price: 101.42
    };

    $scope.stocks = [
            {name:'Apple',
            symbol:'AAPL',
                price:101.42
            },
            {name:'Microsoft',
                symbol:'MSFT',
                price:52.29
            },
            {name:'Netflix',
                symbol:'NFLX',
                price:100.72
            },
            {name:'Jet Blue',
                symbol:'JBLU',
                price:21.51
            },
            {name:'Amazon',
                symbol:'AMZN',
                price:596.38
            }
    ]

});