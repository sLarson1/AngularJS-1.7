var app = angular.module('modalApp',['ngAnimate', 'ngSanitize','mgcrea.ngStrap']);

app.config(function($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
});

app.controller('MainController', ['$scope', '$modal',($scope,$modal)=>{

    $scope.openModal = function(employee){
        $modal({ 
            title: employee.name,
            content: '<p>' + employee.name + ' is the ' + employee.title +
            '</p><p>' + employee.img + employee.bio +
            '</p><p><a href="mailto:' + employee.email + '">' +
            employee.email + '</a></p>',
           show: true,
           templateUrl: 'modal.tpl.html'            
        });
    };

    $scope.employees = [

        {
            name: 'John Martinez',
            title: 'Director of Marketing',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui nulla, tempor a tellus ac, condimentum placerat purus. Suspendisse ac dui mi. ',
            img: '<img src="images/john_martinez.png" alt="John Martinez" class="pull-right">',
            email: 'john.martinez@company.com'
        }, {
            name: 'Lou Simmons',
            title: 'Director of Finance',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui nulla, tempor a tellus ac, condimentum placerat purus. Suspendisse ac dui mi. ',
            img: '<img src="images/lou_simmons.png" alt="Lou Simmons" class="pull-right">',
            email: 'lou.simmons@company.com'
        }, {
            name: 'Jane Smith',
            title: 'Director of Special Events',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui nulla, tempor a tellus ac, condimentum placerat purus. Suspendisse ac dui mi. ',
            img: '<img src="images/jane_smith.png" alt="Jane Smith" class="pull-right">',
            email: 'jane.smith@company.com'
        }
    ]
} 
] );