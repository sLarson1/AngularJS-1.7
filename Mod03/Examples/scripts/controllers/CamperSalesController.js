var myApp = angular.module('myApp', []);

myApp.controller('CamperSalesController', function ($scope, $filter) {

    $scope.product = '2011 rPod 179 Camper';
    $scope.price = 12135.65;
    $scope.endSaleDate = new Date(2015, 11, 24);
    $scope.comments = [
        { stars: 5, name: 'Kathy W.', comment: 'I love our rPod.  Its cozy and functional.' },
        { stars: 4, name: 'G.K.', comment: "We've downsized from the larger campers.  We miss the couch, but enjoy everything else." },
        { stars: 5, name: 'Deb E.', comment: 'The rPod is so easy to pull.' },
        { stars: 5, name: 'D.H.', comment: 'The rPod is wonderful.  Its fully functional. It lets us commune with nature.' },
        { stars: 4, name: 'Mark W.', comment: 'Its so fun to belong to the rPod community.' },
        { stars: 1, name: 'Karla R.', comment: 'The rPod is too small to be functional.  I wish we had won Powerball so we could have a bigger camper.' }
    ];

    $scope.getProductAsUppercase = function () {
        return $filter('uppercase')($scope.product);
    };

    $scope.getProductAsLowercase = function () {
        return $filter('lowercase')($scope.product);
    };

    $scope.getPriceAsCurrency = function () {
        return $filter('currency')($scope.price);
    };

    $scope.getPriceAsNumber = function () {
        return $filter('number')($scope.price, 2);
    };

    $scope.getEndSaleAsLongDate = function () {
        return $filter('date')($scope.endSaleDate, 'MMMM d, yyyy');
    };

    $scope.getEndSaleAsAmericanDate = function () {
        return $filter('date')($scope.endSaleDate, 'MM-dd-yyyy');
    };

    $scope.getEndSaleAsUKDate = function () {
        return $filter('date')($scope.endSaleDate, 'dd-MM-yyyy');
    };

    $scope.commentsByStars = $filter('orderBy')($scope.comments, '-stars');
    $scope.bestComments = $filter('filter')($scope.comments, {stars : 5});
    $scope.bestCommentsByName = $filter('orderBy')($filter('filter')($scope.comments, { stars: 5 }), 'name');

});
