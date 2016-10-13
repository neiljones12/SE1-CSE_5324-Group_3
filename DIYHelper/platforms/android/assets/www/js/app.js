angular.module('App', ['ngRoute', 'App.services', 'App.controllers','ngOpenFB'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        }).when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        }).when('/dashboard', {
            controller: 'DashboardCtrl',
            templateUrl: 'partials/dashboard.html'
        }).when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/search.html'
        }).when('/tools', {
                controller: 'ToolsCtrl',
                templateUrl: 'partials/tools.html'
        }).when('/tutorials', {
            controller: 'ToolsCtrl',
            templateUrl: 'partials/tools/tutorials.html'
        }).when('/compass', {
            controller: 'ToolsCtrl',
            templateUrl: 'partials/tools/compass.html'
        })
        .otherwise({ redirectTo: '/login' });
    });