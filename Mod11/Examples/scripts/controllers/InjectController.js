app.controller('InjectController', ['$scope', 'charLimitFilter', function($scope, charLimit){
	$scope.greeting = 'hello world';
	$scope.inputString = charLimit($scope.greeting, 8);

}]);