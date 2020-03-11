
myApp.controller('LanguageController2', ['$scope', function ($scope) {
    $scope.list = [];
    $scope.languages = 'Java';

    $scope.submit = function () {
        if ($scope.languages) {
            $scope.list.push($scope.languages);
            $scope.languages = '';
        }
    };
}]);
