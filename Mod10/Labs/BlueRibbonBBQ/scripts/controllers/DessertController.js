myApp.controller('DessertController', ['$scope', function ($scope) {

    $scope.$parent.pageClass = 'desserts';

    $scope.desserts = [{
        name: 'Peach Cobbler',
        description: 'Delicious fresh peach cobbler baked with a biscuit topping.',
        price: 4.95
    }, {
        name: 'Smores',
        description: 'Cook smores at your table over a hibachi.',
        price: 6.95
    }, {
        name: 'Deep Fried Cheesecake',
        description: 'Rich and smooth cheese cake rolled up in flaky pastry and deep fried. Served with ice cream.',
        price: 5.95
    }];
}]);