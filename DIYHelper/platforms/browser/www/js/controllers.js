angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', 'ngFB', function ($scope, ngFB) {

        // Defaults to sessionStorage for storing the Facebook token
        //openFB.init({ appId: '1071160422999729' }); 
        ngFB.init({ appId: '465374093524857' });

        //function definition for facebook login
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

            $scope.isProjectStart = false;
            //loading the data from a json file

            //$http.get('js/data.json').success(function (data) {
            //    $scope.datas = data;
            //}); 
            
            $scope.datas = [{
                "id": 1,
                "title": "Pumpkin carving",
                "class": "pumpkin",
                "difficulty": "Beginer",
                "time": "30 min",
                "cost": "10-30$",
                "youtube": "kzc4JxgE43k",
                "description": "Artist Ray Villafane shares techniques and tricks for carving lifelike faces into Halloween pumpkins.",
                "isActive": true,
                "progress": "20",
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
                ],
                "Instructions": [
                  {
                      "step": "Step 1: cut off lid"
                  },
                  {
                      "step": "Step 2: gut the pumpkin"
                  },
                  {
                      "step": "Step 3: create design"
                  },
                  {
                      "step": "Step 4: Carve your design"
                  },
                  {
                      "step": "Step 5: Display your pumpkin"
                  }
                ]
            },

{
    "id": 2,
    "title": "Mounted Mason Jar Planters",
    "class": "jar",
    "difficulty": "Beginer",
    "time": "20 min",
    "cost": "15-45$",
    "youtube": "93ZikCzorwI",
    "description": "Mason jars are a good way to reuse scrap wood and add greenery to your home.",
    "isActive": false,
    "progress": "75",
    "requirements": [
      {
          "name": "cordless Drill"
      },
      {
          "name": "Tape measure"
      },
      {
          "name": "Flat head screwdriver"
      },
      {
          "name": "Level"
      },
      {
          "name": "Marker or pencil"
      },
      {
          "name": "Piece of scap wood of your choice"
      },
      {
          "name": "Mending Plate with screws"
      },
      {
          "name": "Mason Jars"
      },
      {
          "name": "Pipe clmps"
      },
      {
          "name": "French cleat picture hanging hardware"
      }
    ],
    "Instructions": [
      {
          "step": "Step 1: Select wood"
      },
      {
          "step": "Step 2: Construct the base"
      },
      {
          "step": "Step 3: Attach to wall"
      },
      {
          "step": "Step 4: Install mason jars"
      },
      {
          "step": "Step 5: Plant your favorite herbs and flowers"
      }
    ]
},

{
    "id": 3,
    "title": "Beer caddie",
    "class": "beer-caddie",
    "difficulty": "Beginer",
    "time": "1 day",
    "cost": "25$",
    "youtube": "q_VZ98dtc_w",
    "description": "We will walk you through how to make your own handmade beer caddie.",
    "isActive": true,
    "progress": "90",
    "requirements": [
      {
          "name": "Power Drill"
      },
      {
          "name": "1 inch forstner bit"
      },
      {
          "name": "jigsaw"
      },
      {
          "name": "3/4 inch brad nails"
      },
      {
          "name": "Wall mounted bottle opener"
      },
      {
          "name": "Wood glue"
      },
      {
          "name": "Sandpaper"
      },
      {
          "name": "Danish oil"
      },
      {
          "name": "Tack cloth"
      },
      {
          "name": "Hobby board"
      }
    ],
    "Instructions": [
      {
          "step": "Step 1: Make your basic cuts"
      },
      {
          "step": "Step 2: Shape the handles"
      },
      {
          "step": "Step 3: Cut angles"
      },
      {
          "step": "Step 4: Nail pieces together"
      },
      {
          "step": "Step 5: Sand the caddie"
      },
      {
          "step": "Step 6: Finishing using danish oil and rag"
      }
    ]
},

{
    "id": 4,
    "title": "Window Seat",
    "class": "window-seat",
    "difficulty": "Pro",
    "time": "1-2 day",
    "cost": "30-100$",
    "youtube": "G9ZCI_x3EfM",
    "description": "Window seats are a perfect companion for bay windows, making it a cozy nook for reading",
    "isActive": true,
    "progress": "50",
    "requirements": [
      {
          "name": "Measuring tape"
      },
      {
          "name": "Level"
      },
      {
          "name": "Stud finder"
      },
      {
          "name": "Pry bar"
      },
      {
          "name": "Protractor and angle finder"
      },
      {
          "name": "Chalk line"
      },
      {
          "name": "Quick Square"
      },
      {
          "name": "Table saw"
      },
      {
          "name": "Drill"
      },
      {
          "name": "Miter saw"
      },
      {
          "name": "Scissors"
      },
      {
          "name": "Staple gun"
      },
      {
          "name": "Screws"
      },
      {
          "name": "Fibre board panels"
      },
      {
          "name": "Ceramic coated screws"
      },
      {
          "name": "Yellow wood adhesive"
      },
      {
          "name": "Lid support hinges"
      }
    ],
    "Instructions": [
      {
          "step": "Step 1: Mark ledger height on wall"
      },
      {
          "step": "Step 2: Find studs"
      },
      {
          "step": "Step 3: Install back ledger"
      },
      {
          "step": "Step 4: Remove baseboard"
      },
      {
          "step": "Step 5: Cut frame plates"
      },
      {
          "step": "Step 6: Layout stud locations"
      },
      {
          "step": "Step 7: Cut studs"
      },
      {
          "step": "Step 8: Assemble front frames"
      },
      {
          "step": "Step 9: Install front frames"
      },
      {
          "step": "Step 10: Cut side wall ledgers"
      },
      {
          "step": "Step 11: Install side wall ledgers"
      },
      {
          "step": "Step 12: Measure for crosspieces"
      },
      {
          "step": "Step 13: Install crosspieces"
      },
      {
          "step": "Step 14: Cut and install front panel"
      },
      {
          "step": "Step 15: Measure for top and bottom moldings"
      },
      {
          "step": "Step 16: Cut and install top and bottom moldings"
      },
      {
          "step": "Step 17: Make and install vertical boards"
      },
      {
          "step": "Step 18: Install inner panel moldings"
      },
      {
          "step": "Step 19: Finish front panel"
      },
      {
          "step": "Step 20: Install top pieces"
      },
      {
          "step": "Step 21: Install lid"
      },
      {
          "step": "Step 22: Finishing touches"
      }
    ]
},

{
    "id": 5,
    "title": "Raised garden bed",
    "class": "raised-garden-bed",
    "difficulty": "Intermediate",
    "time": "2-3 hours",
    "cost": "16-25$",
    "youtube": "-BmUE_PVC-o",
    "description": "Raised beds are a great way to control your soil content, stave off weeds and prevent soil compaction from foot traffic.",
    "isActive": true,
    "progress": "10",
    "requirements": [
      {
          "name": "Power Drill"
      },
      {
          "name": "Quick square"
      },
      {
          "name": "Tape measure"
      },
      {
          "name": "Sledgehammer"
      },
      {
          "name": "Utility knife"
      },
      {
          "name": "Clamps"
      },
      {
          "name": "Shovel"
      },
      {
          "name": "Scissors"
      },
      {
          "name": "5-1/2 inch masonry towel"
      },
      {
          "name": "Wood scraps"
      },
      {
          "name": "Cedar"
      },
      {
          "name": "Landscaping fabric"
      },
      {
          "name": "Ceramic coated exterior screws"
      },
      {
          "name": "Soil"
      }
    ],
    "Instructions": [
      {
          "step": "Step 1: Cut short sides"
      },
      {
          "step": "Step 2: Cut stakes"
      },
      {
          "step": "Step 3: Attach stakes to long side"
      },
      {
          "step": "Step 4: Attach short sides"
      },
      {
          "step": "Step 5: Position bed"
      },
      {
          "step": "Step 6: Lay landscaping fabric"
      },
      {
          "step": "Step 7: Fill the garden bed"
      }
    ]
}];

            if ($localStorage.datas == undefined) {
                $localStorage.datas = $scope.datas;
            }
            else {
                $scope.datas = $localStorage.datas;
            }

            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].isActive) {
                    $scope.isProjectStart = true;
                }
            }


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

        //The following functions are responsible for redirection
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
    .controller('ProjectsCtrl', ['$scope', '$window', '$location', '$http', '$localStorage', '$sce', '$routeParams', function ($scope, $window, $location, $http, $localStorage, $sce, $routeParams) {
        $scope.dashboard = function () {
            $location.path("/dashboard");
        };

        //initialization function called when the projects section is loaded
        $scope.loadProjects = function () {
            $scope.selectedData = null;
            $scope.isProjectStart = false;
            $scope.datas = $localStorage.datas;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].isActive) {
                    $scope.isProjectStart = true;
                }
            }
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
            $location.path("/projects/" + $localStorage.selectedData.id);
        };

        $scope.projects = function () {
            $location.path("/projects");
        };

        //initialization function called when a search result needs to be loaded
        $scope.loadProjectResults = function () {
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        $localStorage.selectedData = $localStorage.datas[i];
                    }
                }
            }


            var swiper_coverpage = new Swiper('.coverpage-classic', {
                pagination: '.coverpage-slider .swiper-pagination',
                nextButton: '.flashing-arrows-1',
                prevButton: '.flashing-arrows-2',
                paginationClickable: true
            });

            var screen_height = $(window).height();

            $('.coverpage-clear').css({
                "height": screen_height
            });

            $scope.title = $localStorage.selectedData.title;
            $scope.difficulty = $localStorage.selectedData.difficulty;
            $scope.youtube = $localStorage.selectedData.youtube;
            $scope.isActive = $localStorage.selectedData.isActive;
            $scope.description = $localStorage.selectedData.description;
            $scope.difficulty = $localStorage.selectedData.difficulty;
            $scope.time = $localStorage.selectedData.time;
            $scope.cost = $localStorage.selectedData.cost;
            $scope.requirements = $localStorage.selectedData.requirements;
            $scope.class = $localStorage.selectedData.class;
            $scope.Instructions = $localStorage.selectedData.Instructions;
        };

        $scope.homescreenToggleOn = function () {
            var cId = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId) {
                    $scope.isActive = true;
                    $localStorage.datas[i].isActive = true; 
                }
            }
        };

        $scope.homescreenToggleOff = function () {
            var cId1 = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId1) { 
                    $scope.isActive = false; 
                    $localStorage.datas[i].isActive = false;
                }
            }
        };

        $scope.openProject = function (id) {
            $location.path("/projects/" + id)
        };
    }])
        //Search Controller
    .controller('SearchCtrl', ['$scope', function ($scope) {
        //Initializing search
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