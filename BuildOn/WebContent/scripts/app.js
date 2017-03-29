'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Build', []);
angular.module('Home', ["chart.js"]);
angular.module('Editor', ['ui.ace']);
angular.module('Buildrep', ['ngMaterial', 'ngMessages']);
angular.module('Preference', []);
angular.module('HistReport', []);



angular.module('Buildon', [
    'Authentication',
    'Build',
    'Home',
    'Editor',
    'Buildrep',
    'Preference',
    'HistReport',
    'ngRoute',
    'ngCookies',
    'ngAria'
    
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
        
        .when('/', {
            controller: 'BuildController',
            templateUrl: 'modules/build/views/build.html'
        })
 
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })
        
         .when('/edit', {
            controller: 'EditorController',
            templateUrl: 'modules/editor/views/edit.html'
        })
        
        .when('/report', {
            controller: 'BuildRepController',
            templateUrl: 'modules/reports/views/buildrep.html'
        })
        
        .when('/preference', {
            controller: 'PreferController',
            templateUrl: 'modules/preference/views/preference.html'
        })
        
        .when('/histreport', {
            controller: 'HistController',
            templateUrl: 'modules/histreport/views/histreport.html'
        })
 
        
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);