myApp.controller('EntreeController', ['$scope', function ($scope) {

    $scope.entrees = [
        {
            name: 'Pork Spare Ribs',
            description: 'Full-size pork spareribs rubbed with our own secret spice blend and smoked for 4 hours until tender.',
            price: 14.95
        },
        {
            name: 'Double Meat Burger',
            description: 'Burger topped with BBQ sauce, pulled pork, pickles and American cheese.',
            price: 12.95
        },
        {
            name: 'Breakfast Burger',
            description: 'Burger topped with a broken over easy fried egg, bacon and cheese on a croissant bun.',
            price: 12.95
        }
    ];
}]);