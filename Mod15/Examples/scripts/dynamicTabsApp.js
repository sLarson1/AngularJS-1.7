var myApp = angular.module('tabsDemo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

myApp.controller('MainController', ['$scope', function($scope) {
    $scope.tabs = [
    {
      title: 'Tents',
      content: '<img src="images/tent.png" width="200" height="100" alt="Tents" class="thumbnail pull-right" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.'
    },
    {
      title: 'Backpacks',
      content: '<img src="images/backpack.png" alt="Backpacks" width="125" height="150" class="thumbnail pull-right" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.'
    },
	{
      title: 'Tools',
      content: '<img src="images/tools.png" alt="Tools" width="139" height="150" class="thumbnail pull-right" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.'
    }
  ];
}]);