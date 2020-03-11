var myApp = angular.module('stockApp', []);

myApp.controller('StockController', function($scope){
   $scope.logo = 'images/acme-logo.png';
    $scope.today = new Date();
    $scope.customer = 'Mr. Sean';
    $scope.stock = {
        name:'Google',
        symbol:'GGLE',
        price:45.00
                   };
    $scope.stocks =[
        {name:'Apple',symbol:'APPLE',price:589},
        {name:'Airbus',symbol:'AIRBS',price:1023},
        {name:'Boeing',symbol:'BNG',price:34}
    ];
});