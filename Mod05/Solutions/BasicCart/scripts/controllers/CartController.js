myApp.controller('CartController', ['$scope', 'CartService', function ($scope, CartService) {
    $scope.cart = CartService.getCart();
    $scope.buy = function (prod) {
        CartService.buy(prod);
    };

}]);