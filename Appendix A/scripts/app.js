var app = angular.module('myApp', []);
app.directive('myDirective', function(){
  return {
    restrict: 'E',
    template: '<div>Hello World!</div>',
    link: function(scope, element, attrs){
      element.addClass('box');
      element.on('click', function(){
        element.toggleClass('box');
        element.append('<p>AngularJS is cool!<p>');
        var p = angular.element(element.children()[0]);
        p.toggleClass('uline');
        p.attr('id', 'dynamicP');
      });
    }
  };
});
