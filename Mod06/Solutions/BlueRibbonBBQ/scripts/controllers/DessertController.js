myApp.controller('DessertController', ['$scope', function ($scope) {
    $scope.desserts = [
      {
          name: 'Peach Cobbler',
          description: 'Delicious fresh peach cobbler baked with a biscuit topping.',
          price: 4.95
      },
      {
          name: 'Smores',
          description: 'Cook smores at your table over a hibachi.',
          price: 6.95
      }
    ];
}]);