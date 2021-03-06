angular.module('App', ['ngRoute', 'ngStorage','ngCouchbaseLite', 'simple-autocomplete', 'App.services', 'App.controllers', 'youtube-embed','ngOpenFB'])
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
        }).when('/manageCollaboration/:id', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectCollaboration.html'
        }).when('/projects', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectsDashboard.html'
        }).when('/projectSearch', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectsSearch.html'
        }).when('/projectsCreate', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectsCreate.html'
        }).when('/projectsEdit/:id', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectsEdit.html'
        }).when('/projects/:id', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectResults.html'
        }).when('/projectResults', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/projectResults.html'
        }).when('/collaborate', {
            controller: 'ProjectsCtrl',
            templateUrl: 'partials/collaborateDashboard.html'
        }).when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/search.html'
        }).when('/searchResults', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/searchResults.html'
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