myApp.controller('ShapeController', ['$scope', 'ShapeService', function($scope, ShapeService){
    $scope.shape = 'square';
    $scope.area = 0;
    $scope.getArea = function(){
        switch($scope.shape)
        {
            case 'square':
                $scope.area = ShapeService.getSquare($scope.side);
                break;
            case 'rect':
                $scope.area = ShapeService.getRectangle($scope.height, $scope.width);
                break;
            case 'tri':
                $scope.area = ShapeService.getTriangle($scope.base, $scope.height);
                break;
            case 'circ':
                $scope.area = ShapeService.getCircle($scope.radius);
                break;
            case 'para':
                $scope.area = ShapeService.getParallelogram($scope.base, $scope.height);
                break;
          
        }
    };
    

}]);