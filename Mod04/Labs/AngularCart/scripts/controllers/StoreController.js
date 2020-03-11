app.controller('StoreController', function($scope) {

    $scope.Total = 0;
    $scope.Quantity = 0;
    
    $scope.products = [{'sku':'APL',
                       'name':'Apple',
                       'description':'Eat one every day to keep the doctor away!',
                       'price':12,
                       'photo':'images/products/apl.jpg',
                       'qty':0,
                       'itemTotal':0},
                      {'sku':'BAN',
                       'name':'Banana',
                       'description':'These are rich in Potassium and easy to peel.',
                       'price':4,
                       'photo': 'images/products/ban.jpg',
                       'qty':0,
                       'itemTotal':0},
                       {'sku':'ORG',
                       'name':'Orange',
                       'description':'Vitamin C anyone? Go ahead, make some juice.',
                       'price':9,
                       'photo': 'images/products/org.jpg',
                       'qty':0,
                       'itemTotal':0},
                       {'sku':'PNP',
                       'name':'Pineapple',
                       'description':'Enjoy it (but don\'t forget to peel first).',
                       'price':4,
                       'photo': 'images/products/pnp.jpg',
                       'qty':0,
                       'itemTotal':0},
                       {'sku':'WML',
                       'name':'Watermelon',
                       'description':'Nothing comes close on those hot summer days.',
                       'price':4,
                       'photo': 'images/products/wml.jpg',
                       'qty':0,
                       'itemTotal':0}
                      
                      ];
    
    $scope.increase = function ($index) {
        $scope.products[$index].qty += 1;
        $scope.products[$index].itemTotal = ($scope.products[$index].qty * $scope.products[$index].price);
        $scope.update();
    };
    $scope.decrease = function ($index) {
        $scope.products[$index].qty -= 1;
        $scope.products[$index].itemTotal = ($scope.products[$index].qty * $scope.products[$index].price);
        $scope.update();
    };
    $scope.clear = function($index){
       
        $scope.products[$index].qty = 0; 
        $scope.products[$index].itemTotal = 0;  
        
    
        $scope.update();
        
     

    };
    $scope.updateQuantity = function(){
        $scope.Quantity=0;
        for(var i = 0; i < $scope.products.length; i++)
        {
            $scope.Quantity += $scope.products[i].qty; 
             
        }
    }
    $scope.updateTotal = function(){
        $scope.Total=0;
        for(var i = 0; i < $scope.products.length; i++)
        {
            $scope.Total += $scope.products[i].itemTotal; 
            
        }
    }
    $scope.update = function(){
        $scope.updateQuantity();
        $scope.updateTotal();
    }
    $scope.clearAll = function(){
        $scope.Quantity = 0;
        $scope.Total = 0;
        for(var i = 0; i < $scope.products.length; i++)
        {
            $scope.products[i].qty = 0; 
              $scope.products[i].itemTotal = 0;  
        }        
    };
    
});