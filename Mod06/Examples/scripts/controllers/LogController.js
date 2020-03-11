myApp.controller('LogController', ['$scope', '$log', 
function($scope, $log){
    $scope.message = 'Hello World!';
    $log.log($scope.message);

}]);
