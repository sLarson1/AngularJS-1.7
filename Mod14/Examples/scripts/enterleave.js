var app = angular.module('enterleave', ['ngAnimate']);
app.directive('enterLeaveDirective', function($animate) {
        return {
            link: function($scope, $element, $attrs) {
                var firstDiv = angular.element('<div class="animate div1">This is the first div. Click to load the second div.</div>');
                var secondDiv = angular.element('<div class="animate div2">This is the second div. Click to load the first div.</div>');

                $animate.enter(firstDiv, $element);
				
                var isActive = false;
				
                $element.on('click', function() {
                    isActive = !isActive;

                 if (isActive) {
                        $animate.leave(firstDiv);
                        $animate.enter(secondDiv, $element);
                    } else {
                        $animate.leave(secondDiv);
                        $animate.enter(firstDiv, $element);
                    }
                    $scope.$apply();
                });
            }
        };
    });