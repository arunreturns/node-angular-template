/* global angular */

angular.module('appRoutes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home-page.html',
            controller: 'MainCtrl'
        });
});