angular.module('myApp').controller('EmployeeController',
['$scope', '$log',function($scope, $log){
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.employees = [
        {
            name:'Sean Larson',
            phone:'512-588-3430',
            city:'Austin',
            hireDate:'01/01/2019',
            salary:200000
        },
        {
            name:'Joe blow',
            phone:'512-123-1212',
            city:'Duncanville',
            hireDate:'09/10/01',
            salary:'65000'
        },
        {
            name:'Jane Doe',
            phone:'214-232-1212',
            city:'Dallas',
            hireDate:'05/20/18',
            salary:'100000'
        },
        {
            name:'Don Smith',
            phone:'972-232-1212',
            city:'San Diego',
            hireDate:'3/11/99',
            salary:'35000'
        }
                                       
    ];
    $scope.doSort = (propName) =>{
        $log.info("doSort:"+propName);

        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
}]);