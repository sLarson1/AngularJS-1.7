myApp.factory('CartService', function () {
    var cart = [];
    return {
        getCart: function () {
            return cart;
        },
        addToCart: function (prod) {
            cart.push(prod);
            $log.log("add to cart:", prod);
        },
        buy: function (prod) {
            alert('Thanks for buying!\n' + prod.name);
        }
    };
});



