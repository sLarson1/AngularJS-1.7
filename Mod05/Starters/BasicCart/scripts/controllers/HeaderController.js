myApp.controller('HeaderController', function ($scope) {
    $scope.appDetails = {
        title: 'Yogi\'s Camping Supplies',
        tagline: 'Don\'t come to us for all your needs',
        logosrc: 'images/fire.png',
        logoalt: 'Image of Campfire'
    }
    $scope.nav = {
        isActive: function (path) {
            if (path === $location.path()) {
                return true;
            }
            return false;
        }
    };
}]);