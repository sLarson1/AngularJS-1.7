myApp.controller('ShapeController', ['$scope', '$log',  'ShapeService', function($scope, $log, ShapeService){
    $scope.shape = 'square';
    $scope.area = 0;
    $scope.getArea = () => {
        $log.info("getArea():"+$scope.shape);
        var area;
        if('square'==$scope.shape){
     //       area = $scope.side * $scope.side;
            area = ShapeService.squareArea($scope.side);
        }else if('rect'==$scope.shape){
            //area = $scope.height * $scope.width;
            area = ShapeService.rectArea($scope.height, $scope.width);
        }else if('tri'==$scope.shape){
            //area = 0.5 * ($scope.base * $scope.height);
            area = ShapeService.triArea($scope.height, $scope.base);
        }else if('circ'==$scope.shape){
            //area = $scope.radius * Math.PI;
            area = ShapeService.circArea($scope.radius);
        }else if('para'==$scope.shape){
            //area = $scope.base * $scope.height;
            area = ShapeService.paraArea($scope.height, $scope.base);
        }

        $log.info("area:"+area);
        $scope.area = area;
    }
    

}]);