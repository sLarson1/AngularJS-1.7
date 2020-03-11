var app = angular.module('eventApp', []);
app.controller('EventController', function($scope,$log){
    $scope.message = '';
    
    
    
    $scope.captureKey = function($event){
        if(isNaN(String.fromCharCode($event.keyCode)))
        {$scope.message= 'Non-Numeric Key Pressed - Action Cancelled';
            $event.preventDefault();
        }
        else
        {
            $scope.message = '';            
        }
        
    };

});

