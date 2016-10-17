angular.module('App', ['ngRoute', 'ngStorage', 'simple-autocomplete', 'App.services', 'App.controllers', 'youtube-embed','ngOpenFB'])
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
        }).when('/projects', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projects.html'
        }).when('/projects/:id', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectResults.html'
        }).when('/projectResults', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectResults.html'
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