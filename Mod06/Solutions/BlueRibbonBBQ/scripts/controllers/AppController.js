myApp.controller('AppController', ['$scope', function ($scope) {

    $scope.appetizers = [
      {
          name: 'Deep Fried Pickles',
          description: 'Seasoned breaded pickle spears with ranch dipping sauce.',
          price: 6.95
      },
      {
          name: 'Bacon Jalapeno Poppers',
          description: 'Cream cheese with diced jalapenos, onions and crispy bacon that is deep fried in a panko breading. Served with our secret recipe dipping sauce.',
          price: 5.95
      },
      {
          name: 'Chicken Wings',
          description: 'Served 6 different ways - Kansas City BBQ, Polynesian, Honey Garlic, Jamaican and Extra Extra Spicy.',
          price: 8.95
      }
    ];
}]);