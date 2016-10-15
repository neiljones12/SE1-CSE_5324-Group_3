angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', 'ngFB', function ($scope, ngFB) {

        // Defaults to sessionStorage for storing the Facebook token
        //openFB.init({ appId: '1071160422999729' }); 
        ngFB.init({ appId: '465374093524857' });
        //  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
        //  openFB.init({appId: 'YOUR_FB_APP_ID', tokenStore: window.localStorage});

        $scope.facebookLogin = function () {
            ngFB.login(
                    function (response) {
                        if (response.status === 'connected') {
                            alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                        } else {
                            alert('Facebook login failed: ' + response.error);
                        }
                    }, { scope: 'email,read_stream,publish_actions' });
        }

        $scope.getInfo = function () {
            openFB.api({
                path: '/me',
                success: function (data) {
                    console.log(JSON.stringify(data));
                    document.getElementById("userName").innerHTML = data.name;
                    document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
                },
                error: errorHandler
            });
        }

        $scope.share = function () {
            openFB.api({
                method: 'POST',
                path: '/me/feed',
                params: {
                    message: document.getElementById('Message').value || 'Testing Facebook APIs'
                },
                success: function () {
                    alert('the item was posted on Facebook');
                },
                error: errorHandler
            });
        }

        $scope.readPermissions = function () {
            openFB.api({
                method: 'GET',
                path: '/me/permissions',
                success: function (result) {
                    alert(JSON.stringify(result.data));
                },
                error: errorHandler
            });
        }

        $scope.revoke = function () {
            openFB.revokePermissions(
                    function () {
                        alert('Permissions revoked');
                    },
                    errorHandler);
        }

        $scope.logout = function () {
            openFB.logout(
                    function () {
                        alert('Logout successful');
                    },
                    errorHandler);
        }

        function errorHandler(error) {
            alert(error.message);
        }
    }])
    //Dashboard controller
    .controller('DashboardCtrl', ['$scope', '$window', '$location', '$http', '$localStorage', '$sce', function ($scope, $window, $location, $http, $localStorage, $sce) {
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
        
        $scope.projects = function () {
            $location.path("/projects");
        };
        $scope.search = function () {
            $location.path("/search");
        };
        $scope.tools = function () {
            $location.path("/tools");
        };
    }])
    //Projects controller
    .controller('ProjectsCtrl', ['$scope', '$window', '$location', '$http', '$localStorage', '$sce', function ($scope, $window, $location, $http, $localStorage, $sce) {
        $scope.loadProjects = function () {

            $scope.selectedData = null;
            $scope.datas = [
  {
      "id": 1,
      "title": "Pumpkin carving",
      "difficulty": "Beginer",
      "time": "30 min",
      "cost": "10-30$",
      "youtube": "kzc4JxgE43k",
      "description": "Artist Ray Villafane shares techniques and tricks for carving lifelike faces into Halloween pumpkins.",
      "requirements": [
        {
            "name": "cordless Drill"
        },
        {
            "name": "Jab saw"
        },
        {
            "name": "Spade bits"
        },
        {
            "name": "Wet/Dry Vac"
        },
        {
            "name": "Hammer"
        },
        {
            "name": "Wood chisel"
        },
        {
            "name": "Eye protection"
        },
        {
            "name": "Gloves"
        },
        {
            "name": "Pumpkin"
        }
      ]
  }];
            //$http.get('js/data.json').success(function (data) {
            //    $scope.datas = data;
            //});
        };
        $scope.onSelect = function (selection) {
            console.log(selection);
            $scope.selectedData = selection;
        };

        $scope.clearInput = function () {
            $scope.$broadcast('simple-autocomplete:clearInput');
        };

        $scope.submitSearch = function () {
            $localStorage.selectedData = $scope.selectedData
            $location.path("/projectResults");
        };

        $scope.loadProjectResults = function () {
            $scope.title = $localStorage.selectedData.title;
            $scope.difficulty = $localStorage.selectedData.difficulty;
            $scope.youtube = $localStorage.selectedData.youtube;
            $scope.description = $localStorage.selectedData.description;
            $scope.difficulty = $localStorage.selectedData.difficulty;
            $scope.time = $localStorage.selectedData.time;
            $scope.cost = $localStorage.selectedData.cost;
            $scope.requirements = $localStorage.selectedData.requirements;
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
            var destinationPosition;
            var destinationBearing;

            var positionTimerId;
            var currentPosition;
            var prevPosition;
            var prevPositionError;

            var compassTimerId;
            var currentHeading;
            var prevHeading;
            var prevCompassErrorCode;

            minPositionAccuracy = 50; // Minimum accuracy in metres to accept as a reliable position
            minUpdateDistance = 1; // Minimum number of metres to move before updating distance to destination

            $targetLat = $('#target-lat');
            $targetLon = $('#target-lon');
            $error = $('#error');
            $results = $('#results');
            $distance = $('#distance');
            $bearing = $('#bearing');
            $heading = $('#heading');
            $difference = $('#difference');
            $arrow = $('#arrow');

            watchPosition();
            watchCompass();

            // Set destination
            $targetLat.change(updateDestination);
            $targetLon.change(updateDestination);
            updateDestination();

            function watchPosition() {
                if (positionTimerId) navigator.geolocation.clearWatch(positionTimerId);
                positionTimerId = navigator.geolocation.watchPosition(onPositionUpdate, onPositionError, {
                    enableHighAccuracy: true,
                    timeout: 1000,
                    maxiumumAge: 0
                });
            }

            function watchCompass() {
                if (compassTimerId) navigator.compass.clearWatch(compassTimerId);
                compassTimerId = navigator.compass.watchHeading(onCompassUpdate, onCompassError, {
                    frequency: 100 // Update interval in ms
                });
            }

            function onPositionUpdate(position) {
                if (position.coords.accuracy > minPositionAccuracy) return;

                prevPosition = currentPosition;
                currentPosition = new LatLon(position.coords.latitude, position.coords.longitude);

                if (prevPosition && prevPosition.distanceTo(currentPosition) * 1000 < minUpdateDistance) return;

                updatePositions();
            }

            function onPositionError(error) {
                watchPosition();

                if (prevPositionError && prevPositionError.code == error.code && prevPositionError.message == error.message) return;

                $error.html("Error while retrieving current position. <br/>Error code: " + error.code + "<br/>Message: " + error.message);

                if (!$error.is(":visible")) {
                    $error.show();
                    $results.hide();
                }

                prevPositionError = {
                    code: error.code,
                    message: error.message
                };
            }

            function onCompassUpdate(heading) {
                prevHeading = currentHeading;
                currentHeading = heading.trueHeading >= 0 ? Math.round(heading.trueHeading) : Math.round(heading.magneticHeading);

                if (currentHeading == prevHeading) return;

                updateHeading();
            }

            function onCompassError(error) {
                watchCompass();

                if (prevCompassErrorCode && prevCompassErrorCode == error.code) return;

                var errorType;
                switch (error.code) {
                    case 1:
                        errorType = "Compass not supported";
                        break;
                    case 2:
                        errorType = "Compass internal error";
                        break;
                    default:
                        errorType = "Unknown compass error";
                }

                $error.html("Error while retrieving compass heading: " + errorType);

                if (!$error.is(":visible")) {
                    $error.show();
                    $results.hide();
                }

                prevCompassErrorCode = error.code;
            }

            function updateDestination() {
                destinationPosition = new LatLon($targetLat.val(), $targetLon.val());
                updatePositions();
            }


            function updatePositions() {
                if (!currentPosition) return;

                if (!$results.is(":visible")) {
                    $results.show();
                    $error.hide();
                }

                destinationBearing = Math.round(currentPosition.bearingTo(destinationPosition));

                $distance.html(Math.round(currentPosition.distanceTo(destinationPosition) * 1000));
                $bearing.html(destinationBearing);

                updateDifference();
            }

            function updateHeading() {
                $heading.html(currentHeading);
                updateDifference();
            }

            function updateDifference() {
                var diff = destinationBearing - currentHeading;
                $difference.html(diff);
                $arrow.css("-webkit-transform", "rotate(" + diff + "deg)");
            }
        };
    }]);