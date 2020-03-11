var myApp = angular.module('myApp',[])
.controller('SimpleController',['$scope','$log', ($scope,$log)=>{

    $scope.languages = {
        'Java':'J',
        'C#':'CS',
        'PHP':'PHP',
        'Python':'PY',
        'Objective C':'OC'
    }
}]);