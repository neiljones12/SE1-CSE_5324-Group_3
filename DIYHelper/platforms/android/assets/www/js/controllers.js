angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', function ($scope) {

    }])
    //Dashboard controller
    .controller('DashboardCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {
        $scope.loadDashbaord = function () {
            //To enable slider on homescreen
            var swiper_store_thumbnail_slider = new Swiper('.home-round-slider', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    660: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    }
                }
            });
        };
        $scope.search = function () {
            $location.path("/search"); 
        };
        $scope.tools = function () {
            $location.path("/tools");
        };
    }])
    //Search Controller
    .controller('SearchCtrl', ['$scope', function ($scope) {
        $scope.searchInit = function () {
            $scope.searchText = "";
        };
        $scope.submitSearch = function () {

        };
    }])
    //Tools controller
    .controller('ToolsCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {
        $scope.toolsInit = function () { 
        };

        // --- Tutorial ---
        $scope.tutorialLoad = function () {
            $location.path("/tutorials");
        };

        $scope.tutorialsInit = function () {

        };

        $scope.submitTutorialSearch = function () {

        };

        // --- Compass --
        $scope.compassLoad = function () {
            $location.path("/compass");
        };

        $scope.compassInit = function () {

        };
    }]);