myApp.controller('EmailController', ['$scope', function($scope){
      $scope.emails = ['devan123@gmail.com', 
                           'bruschi54@yahoo.com'];
 
      $scope.add = function(){
            $scope.emails.push($scope.newemail);
            $scope.newemail = '';
      };

}]);