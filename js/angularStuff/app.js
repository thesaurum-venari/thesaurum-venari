var app = angular.module('webapp', 'ngRoute');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/signup', {
            templateUrl: 'templates/signup.html',
            controller: 'SignUp',
            controllerAs: 'signup'
        })
        .when('/line', {
            templateUrl: 'templates/line.html',
            controller: 'LineCtrl',
            controllerAs: 'line'
        })
        .when('/area', {
            templateUrl: 'templates/area.html',
            controller: 'AreaCtrl',
            controllerAs: 'area'
        })
        .otherwise({
            redirectTo: '/pie'
        });
}]);
