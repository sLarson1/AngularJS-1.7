myApp.controller('ProductsController', ['$scope', function ($scope) {

    $scope.items = [
        { category: 'Bakery' },
        { category: 'Beverages' },
        { category: 'Canned and Packaged Foods' },
        { category: 'Dairy' },
        { category: 'Dry Goods (toilet paper, laundry soap, etc)' },
        { category: 'Floral' },
        { category: 'Produce (fresh fruits and vegetables)' },
        { category: 'Frozen Foods' },
        { category: 'General Merchandise (health/beauty, kitchen, etc)' },
        { category: 'Meats' },
        { category: 'Pharmacy' },
        { category: 'Seafood' },
        { category: 'Wine/Beer/Liquor' },
    ];

}]);