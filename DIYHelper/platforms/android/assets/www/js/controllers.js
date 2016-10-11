angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', function ($scope) {

    }])
    //Dashboard controller
    .controller('DashboardCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.loadDashbaord = function () {
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
            var landingUrl = "http://" + $window.location.host + "#/search";
            $window.location.href = landingUrl;
        };
        $scope.tools = function () {
            var landingUrl = "http://" + $window.location.host + "#/tools";
            $window.location.href = landingUrl;
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
    .controller('ToolsCtrl', ['$scope', function ($scope) {
        $scope.toolsInit = function () { 
        }; 
    }]);