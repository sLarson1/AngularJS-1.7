myApp.controller('ProductController', ['$scope', 'ProductService', 'CartService', '$modal', function ($scope, ProductService, CartService, $modal) {
    $scope.products = ProductService.getProducts();
    $scope.modal = {
        title: 'Yogi\'s Camping',
        content: 'Item added to cart'
    };
    $scope.addToCart = function (product) {
        CartService.addToCart(product);

    }
}]);
