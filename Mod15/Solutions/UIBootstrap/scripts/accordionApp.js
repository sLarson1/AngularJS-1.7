var app = angular.module('accordionApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('MainController', ['$scope', function($scope) {
 $scope.groups = [
    {
     title: 'Tents',
     class: 'panel-primary',
     glyph: 'glyphicon glyphicon-tent',
     content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.</p>',
     img: '<p class="text-center"><img src="images/tent1.png" width="250" height="130" alt="Tents" class="img-circle" /> <img src="images/tent2.png" width="250" height="130" alt="Tents" class="img-circle" /></p>'
    },
    {
     title: 'Camping Equipment',
     class: 'panel-warning',
     glyph: 'glyphicon glyphicon-wrench',
     content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.</p>',
     img: '<p class="text-center"><img src="images/equipment1.png" alt="Sleeping Bag" width="250" height="130" class="img-circle" /> <img src="images/equipment2.png" alt="Knife" width="250" height="130" class="img-circle" /></p>'
    },
	{
     title: 'Cooking',
     class: 'panel-info',
     glyph: 'glyphicon glyphicon-fire',
     content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ornare arcu, eu blandit tortor porttitor mollis. Donec ipsum lectus, lobortis id sapien et, interdum volutpat dui. Nunc tristique lorem a elit vestibulum, faucibus venenatis nisl ultricies.',
     img: '<p class="text-center"><img src="images/cooking1.png" alt="Cooking" width="250" height="130" class="img-circle" /> <img src="images/cooking2.png" alt="Cooking" width="250" height="130" class="img-circle" /></p>'
    }
  ];
}]);