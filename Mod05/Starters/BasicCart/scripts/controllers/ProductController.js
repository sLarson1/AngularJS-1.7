myApp.controller('ProductController', function ($scope) {
    $scope.products = ProductService.getProducts();
    $scope.modal = {
        title: 'Yogi\'s Camping',
        content: 'Item added to cart'
    };
    $scope.addToCart = function (product) {
        CartService.addToCart(product);

    }
}]);
