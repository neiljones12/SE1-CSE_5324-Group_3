angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/Login.html'
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
        .otherwise({ redirectTo: '/' });
    });