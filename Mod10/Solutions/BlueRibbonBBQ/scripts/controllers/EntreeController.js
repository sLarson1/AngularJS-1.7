myApp.controller('EntreeController', ['$scope', function ($scope) {

   $scope.$parent.pageClass = 'main';

   $scope.entrees = [{
        name: 'Pork Spare Ribs',
        description: 'Full-size pork spareribs rubbed with our own secret spice blend and smoked for 4 hours until tender.',
        price: 14.95
    }, {
        name: 'Double Meat Burger',
        description: 'Burger topped with BBQ sauce, pulled pork, pickles and American cheese.',
        price: 12.95
    },{
        name: 'Breakfast Burger',
        description: 'Burger topped with a fried egg, bacon and guacamole.',
        price: 12.95
    }, {
        name: 'Beef Brisket Pie',
        description: 'Made with beef brisket, cream corn and mashed potatoes.',
        price: 14.95
    }];
}]);