myApp.controller('CustomerController', ['$scope', function($scope){
    

    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    
    $scope.customers = [{ id: 1, name: 'Alexis', phone: '800-243-9392', city: 'Boston', orders: [{ id: 101, orderDate: '10/15/13', orderTotal: 540.32 }, { id: 105, orderDate: '1/23/15', orderTotal: 1246.89 }, { id: 107, orderDate: '03/02/15', orderTotal: 3930.38 }] },
            { id: 2, name: 'Jack', phone: '800-555-2711', city: 'Seattle', orders: [{ id: 102, orderDate: '2/15/14', orderTotal: 1242.39 }, { id: 108, orderDate: '03/08/15', orderTotal: 540.32 }] },
            { id: 3, name: 'Marie', phone: '800-555-2720', city: 'Denver', orders: [{ id: 103, orderDate: '1/14/14', orderTotal: 2345.34 }, { id: 106, orderDate: '02/11/15', orderTotal: 540.32 }] },
            { id: 4, name: 'Daniel', phone: '800-555-8289', city: 'Houston', orders: [{ id: 104, orderDate: '12/15/12', orderTotal: 2440.59 }, { id: 109, orderDate: '08/07/15', orderTotal: 540.32 }] }];
    
    }]);
