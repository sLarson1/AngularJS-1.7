8iapp.controller('ContactController', ['$scope',function($scope){
    
    $scope.newcontact = {};
    $scope.contacts = [
                    {id:1, name:'Brady', email: 'brady12@gmail.com', phone:'(555)555-5551'},
                    {id:2, name:'Gary', email: 'gstone66@yahoo.com', phone:'(555)555-2720'},
                    ];
    
    contactId = $scope.contacts.length+1;
    
    $scope.saveContact = function(){
        if($scope.newcontact.id==null)
        {
            $scope.newcontact.id = contactId++;
            $scope.contacts.push($scope.newcontact);
            
        }
        else
        {
            for(ndx in $scope.contacts)
            {
                if($scope.contacts[ndx].id == $scope.newcontact.id)
                {
                    $scope.contacts[ndx] = $scope.newcontact;
                }
            }
        }
      $scope.newcontact = {};  
    };
    
    $scope.deleteContact = function(ID){
    
        for(ndx in $scope.contacts){
            if($scope.contacts[ndx].id == ID)
            {
                $scope.contacts.splice(ndx, 1);
                $scope.newcontact = {};
            }
        }
    };
        
    $scope.editContact = function(ID){
    
        for(ndx in $scope.contacts){
            if($scope.contacts[ndx].id == ID)
            {
                $scope.newcontact = angular.copy($scope.contacts[ndx]);
            }
        }
    };
    
    
}]);