angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', function ($scope) {

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
                "isDelete": false,
                "difficulty": "Beginner",
                "time": "30 min",
                "cost": "10-30$",
                "youtube": "kzc4JxgE43k",
                "description": "Artist Ray Villafane shares techniques and tricks for carving lifelike faces into Halloween pumpkins.",
                "isActive": true,
                "progress": "20",
                "requirements": [
                  {
                      "name": "cordless Drill",
                      "checked": false, "add": true,
                  },
                  {
                      "name": "Jab saw",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Spade bits",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Wet/Dry Vac",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Hammer",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Wood chisel",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Eye protection",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Gloves",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Pumpkin",
                      "checked": false, "add": true
                  }
                ],
                "Instructions": [
                  {
                      "step": "Step 1: cut off lid",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 2: gut the pumpkin",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 3: create design",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 4: Carve your design",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 5: Display your pumpkin",
                      "checked": false, "add": true
                  }
                ]
            }, {
                "id": 2,
                "title": "Mounted Mason Jar Planters",
                "class": "jar",
                "isDelete": false,
                "difficulty": "Beginner",
                "time": "20 min",
                "cost": "15-45$",
                "youtube": "93ZikCzorwI",
                "description": "Mason jars are a good way to reuse scrap wood and add greenery to your home.",
                "isActive": false,
                "progress": "75",
                "requirements": [
                  {
                      "name": "cordless Drill",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Tape measure",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Flat head screwdriver",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Level",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Marker or pencil",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Piece of scap wood of your choice",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Mending Plate with screws",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Mason Jars",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Pipe clmps",
                      "checked": false, "add": true
                  },
                  {
                      "name": "French cleat picture hanging hardware",
                      "checked": false, "add": true
                  }
                ],
                "Instructions": [
                  {
                      "step": "Step 1: Select wood",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 2: Construct the base",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 3: Attach to wall",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 4: Install mason jars",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 5: Plant your favorite herbs and flowers",
                      "checked": false, "add": true
                  }
                ]
            }, {
                "id": 3,
                "title": "Beer caddie",
                "class": "beer-caddie",
                "isDelete": false,
                "difficulty": "Beginner",
                "time": "1 day",
                "cost": "25$",
                "youtube": "q_VZ98dtc_w",
                "description": "We will walk you through how to make your own handmade beer caddie.",
                "isActive": true,
                "progress": "90",
                "requirements": [
                  {
                      "name": "Power Drill",
                      "checked": false, "add": true
                  },
                  {
                      "name": "1 inch forstner bit",
                      "checked": false, "add": true
                  },
                  {
                      "name": "jigsaw",
                      "checked": false, "add": true
                  },
                  {
                      "name": "3/4 inch brad nails",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Wall mounted bottle opener",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Wood glue",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Sandpaper",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Danish oil",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Tack cloth",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Hobby board",
                      "checked": false, "add": true
                  }
                ],
                "Instructions": [
                  {
                      "step": "Step 1: Make your basic cuts",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 2: Shape the handles",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 3: Cut angles",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 4: Nail pieces together",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 5: Sand the caddie",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 6: Finishing using danish oil and rag",
                      "checked": false, "add": true
                  }
                ]
            }, {
                "id": 4,
                "title": "Window Seat",
                "class": "window-seat",
                "isDelete": false,
                "difficulty": "Pro",
                "time": "1-2 day",
                "cost": "30-100$",
                "youtube": "G9ZCI_x3EfM",
                "description": "Window seats are a perfect companion for bay windows, making it a cozy nook for reading",
                "isActive": true,
                "progress": "50",
                "requirements": [
                  {
                      "name": "Measuring tape",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Level",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Stud finder",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Pry bar",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Protractor and angle finder",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Chalk line",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Quick Square",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Table saw",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Drill",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Miter saw",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Scissors",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Staple gun",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Screws",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Fibre board panels",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Ceramic coated screws",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Yellow wood adhesive",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Lid support hinges",
                      "checked": false, "add": true
                  }
                ],
                "Instructions": [
                  {
                      "step": "Step 1: Mark ledger height on wall",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 2: Find studs",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 3: Install back ledger",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 4: Remove baseboard",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 5: Cut frame plates",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 6: Layout stud locations",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 7: Cut studs",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 8: Assemble front frames",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 9: Install front frames",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 10: Cut side wall ledgers",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 11: Install side wall ledgers",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 12: Measure for crosspieces",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 13: Install crosspieces",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 14: Cut and install front panel",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 15: Measure for top and bottom moldings",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 16: Cut and install top and bottom moldings",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 17: Make and install vertical boards",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 18: Install inner panel moldings",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 19: Finish front panel",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 20: Install top pieces",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 21: Install lid",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 22: Finishing touches",
                      "checked": false, "add": true
                  }
                ]
            }, {
                "id": 5,
                "title": "Raised garden bed",
                "class": "raised-garden-bed",
                "isDelete": false,
                "difficulty": "Intermediate",
                "time": "2-3 hours",
                "cost": "16-25$",
                "youtube": "-BmUE_PVC-o",
                "description": "Raised beds are a great way to control your soil content, stave off weeds and prevent soil compaction from foot traffic.",
                "isActive": true,
                "progress": "10",
                "requirements": [
                  {
                      "name": "Power Drill",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Quick square",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Tape measure",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Sledgehammer",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Utility knife",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Clamps",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Shovel",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Scissors",
                      "checked": false, "add": true
                  },
                  {
                      "name": "5-1/2 inch masonry towel",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Wood scraps",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Cedar",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Landscaping fabric",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Ceramic coated exterior screws",
                      "checked": false, "add": true
                  },
                  {
                      "name": "Soil",
                      "checked": false, "add": true
                  }
                ],
                "Instructions": [
                  {
                      "step": "Step 1: Cut short sides",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 2: Cut stakes",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 3: Attach stakes to long side",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 4: Attach short sides",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 5: Position bed",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 6: Lay landscaping fabric",
                      "checked": false, "add": true
                  },
                  {
                      "step": "Step 7: Fill the garden bed",
                      "checked": false, "add": true
                  }
                ]
            }];

            if ($localStorage.datas == undefined) {
                $localStorage.datas = $scope.datas;
                $localStorage.lastId = 5;
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

        $scope.edit = function () {
            var currentId = $routeParams.id;
            $location.path("/projectsEdit/" + currentId);
        };

        $scope.projects = function () {
            $location.path("/projects");
        };

        $scope.submitSearch = function () {
            $localStorage.selectedData = $scope.selectedData
            $location.path("/projects/" + $localStorage.selectedData.id);
        };

        $scope.projectsSearch = function () {
            $location.path("/projectSearch");
        };

        $scope.projectsCreate = function () {
            $location.path("/projectsCreate");
        };

        //initialization function called when a search result needs to be loaded
        $scope.loadProjectResults = function () {
            var currentId = $routeParams.id;
            $scope.progress = 0;
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

            var reqCount = 0;
            var resCountTotal = 0;
            var insCount = 0;
            var insCountTotal = 0;
            for (var i = 0; i < $localStorage.selectedData.requirements.length; i++) {
                if ($localStorage.selectedData.requirements[i].checked && $localStorage.selectedData.requirements[i].add) {
                    reqCount++;
                }
                if ($localStorage.selectedData.requirements[i].add) {
                    resCountTotal++;
                }
            }
            for (var i = 0; i < $localStorage.selectedData.Instructions.length; i++) {
                if ($localStorage.selectedData.Instructions[i].checked && $localStorage.selectedData.Instructions[i].add) {
                    insCount++;
                }
                if ($localStorage.selectedData.Instructions[i].add) {
                    insCountTotal++;
                } 
            } 

            $scope.val1 = (reqCount / resCountTotal);
            $scope.val2 = (insCount / insCountTotal);
            $scope.progress = Math.round((($scope.val1 * 0.3) + ($scope.val2 * 0.7)) * 100);
             
            document.getElementById("progress").style.width = $scope.progress+"%";

        };

        //$scope.$watch('[val1,val2]', function (newValue, oldValue) {
        //    $scope.val3 = parseInt($scope.val1) + parseInt($scope.val2);
        //});

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


        $scope.initCreateProject = function () {
            $localStorage.lastId = $localStorage.lastId + 1;
            $scope.project = {
                id: $localStorage.lastId,
                title: "",
                isDelete: false,
                class: "default",
                difficulty: "",
                time: "",
                cost: "",
                youtube: "",
                description: "",
                isActive: false,
                progress: "0",
                requirements: [],
                Instructions: []
            };
        };

        $scope.initEditProject = function () {
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        $localStorage.selectedData = $localStorage.datas[i];
                    }
                }
            }

            $scope.project = {
                id: $localStorage.selectedData.id,
                title: $localStorage.selectedData.title,
                isDelete: false,
                class: $localStorage.selectedData.class,
                difficulty: $localStorage.selectedData.difficulty,
                time: $localStorage.selectedData.time,
                cost: $localStorage.selectedData.cost,
                youtube: $localStorage.selectedData.youtube,
                description: $localStorage.selectedData.description,
                isActive: $localStorage.selectedData.isActive,
                progress: $localStorage.selectedData.progress,
                requirements: $localStorage.selectedData.requirements,
                Instructions: $localStorage.selectedData.Instructions
            };
        };

        $scope.deleteRequirement = function (obj) {
            obj.add = false;
        };

        $scope.addRequirement = function () {
            var obj = {
                add: true,
                name: "",
                checked: false
            };
            $scope.project.requirements.push(obj);
        };

        $scope.deleteInstructions = function (obj) {

            obj.add = false;
        };

        $scope.addInstructions = function () {
            var obj = {
                add: true,
                step: "",
                checked: false
            };
            $scope.project.Instructions.push(obj);
        };

        $scope.submitCreateProject = function () {
            $localStorage.datas.push($scope.project);
            $location.path("/projects/" + $scope.project.id);
        };

        $scope.delete = function () {
            var cId4 = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId4) {
                    $localStorage.datas[i].isDelete = true;
                    $localStorage.datas[i].isActive = false;
                }
            }
            $location.path("/projects");
        };

        $scope.checkboxReq = function (obj) {
            var reqCount = 0;
            var resCountTotal = 0;
            var insCount = 0;
            var insCountTotal = 0;
            for (var i = 0; i < $localStorage.selectedData.requirements.length; i++) {
                if ($localStorage.selectedData.requirements[i].checked && $localStorage.selectedData.requirements[i].add) {
                    reqCount++;
                }
                if ($localStorage.selectedData.requirements[i].add) {
                    resCountTotal++;
                }
            }
            for (var i = 0; i < $localStorage.selectedData.Instructions.length; i++) {
                if ($localStorage.selectedData.Instructions[i].checked && $localStorage.selectedData.Instructions[i].add) {
                    insCount++;
                }
                if ($localStorage.selectedData.Instructions[i].add) {
                    insCountTotal++;
                }
            }
            $scope.val1 = (reqCount / resCountTotal);
            $scope.val2 = (insCount / insCountTotal);
            $scope.progress = Math.round((($scope.val1 * 0.3) + ($scope.val2 * 0.7)) * 100);
            $localStorage.selectedData.progress = $scope.progress;
            document.getElementById("progress").style.width = $scope.progress + "%";
        };
        $scope.checkboxIns = function (obj) {
            var reqCount = 0;
            var resCountTotal = 0;
            var insCount = 0;
            var insCountTotal = 0;
            for (var i = 0; i < $localStorage.selectedData.requirements.length; i++) {
                if ($localStorage.selectedData.requirements[i].checked && $localStorage.selectedData.requirements[i].add) {
                    reqCount++;
                }
                if ($localStorage.selectedData.requirements[i].add) {
                    resCountTotal++;
                }
            }
            for (var i = 0; i < $localStorage.selectedData.Instructions.length; i++) {
                if ($localStorage.selectedData.Instructions[i].checked && $localStorage.selectedData.Instructions[i].add) {
                    insCount++;
                }
                if ($localStorage.selectedData.Instructions[i].add) {
                    insCountTotal++;
                }
            }
            $scope.val1 = (reqCount / resCountTotal);
            $scope.val2 = (insCount / insCountTotal);
            $scope.progress = Math.round((($scope.val1 * 0.3) + ($scope.val2 * 0.7)) * 100);
            $localStorage.selectedData.progress = $scope.progress;
            document.getElementById("progress").style.width = $scope.progress + "%";
        };
        $scope.submitUpdateProject = function () {
            var cId2 = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId2) {
                    $localStorage.datas[i].title = $scope.project.title;
                    $localStorage.datas[i].class = $scope.project.class;
                    $localStorage.datas[i].difficulty = $scope.project.difficulty;
                    $localStorage.datas[i].time = $scope.project.time;
                    $localStorage.datas[i].cost = $scope.project.cost;
                    $localStorage.datas[i].youtube = $scope.project.youtube;
                    $localStorage.datas[i].description = $scope.project.description;
                    $localStorage.datas[i].requirements = $scope.project.requirements;
                    $localStorage.datas[i].Instructions = $scope.project.Instructions;
                }
            }
            $location.path("/projects");
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
    }]);