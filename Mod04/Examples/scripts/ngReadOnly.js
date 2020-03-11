var app = angular.module('disableApp', []);
app.controller('MainController', function($scope){
    $scope.isReadOnly = false;
    $scope.status = 'write';
    $scope.toggle = function(){
        $scope.isReadOnly = !$scope.isReadOnly;
        if($scope.status=='readonly')
        {
            $scope.status = 'write';
        }
        else
        {
            $scope.status = 'readonly';
        }
    };
});