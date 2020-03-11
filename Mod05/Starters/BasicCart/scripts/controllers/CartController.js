myApp.controller('CartController', function ($scope) {
    $scope.cart = CartService.getCart();
    $scope.buy = function (prod) {
        CartService.buy(prod);
    };

}]);