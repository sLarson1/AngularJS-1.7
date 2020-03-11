var myApp = angular.module('myApp', []);

myApp.controller('CartController', function ($scope) {

    $scope.cartTotal = 0;

    $scope.$watch('cartTotal', function () {
        if ($scope.cartTotal != 0)
        {
            alert('There are ' + $scope.cartTotal + ' items in your cart');
        }
    });

    $scope.addItem = function () {
        $scope.cartTotal += 1;
        // This will trigger $watch expression 
    };

    $scope.removeItem = function () {
        if ($scope.cartTotal > 0) {
            $scope.cartTotal -= 1;
            // This will trigger $watch expression 
        }
    };
});
