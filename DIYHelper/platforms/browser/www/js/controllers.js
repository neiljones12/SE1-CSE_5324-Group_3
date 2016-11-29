angular.module('App.controllers', [])
    .controller('LoginCtrl', ['$scope', '$localStorage', '$location', function ($scope, $localStorage, $location) {
        //Initializing users 
        //initialized when the app is launched 

        $scope.getUsers = function () {
            var url = 'http://diyhelper.azurewebsites.net/api/values/users';
            //console.log(url);
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    console.log(request);
                    $scope.userResponse = request.responseText;
                    $scope.$apply(function () {
                        $scope.users = '';
                        $scope.users = $scope.userResponse;
                        if ($scope.users != '') {
                            $localStorage.users = JSON.parse(JSON.parse($scope.users));
                        }
                        //console.log($localStorage.users);
                        $scope.loginInit();
                    });
                }
            }
            request.send();
        };

        // Initialize APP
        $scope.users = '';
        $scope.loginInit = function () {

            if ($localStorage.loggedInUser != undefined) {
                $location.path("/dashboard");
            }

            //initial load
            $scope.username = "Admin";
            $scope.password = "Admin";

            $scope.login = function () {
                console.log($localStorage.users.length);
                for (var i = 0; i < $localStorage.users.length; i++) {
                    if ($localStorage.users[i].username == $scope.username) {
                        if ($localStorage.users[i].password == $scope.password) {
                            $localStorage.loggedInUser = $localStorage.users[i];
                            $location.path("/dashboard");
                        }
                        else {
                            //Wrong Password
                            $scope.error = true;
                            $scope.message = "Incorrect password";
                        }
                    }
                    else {
                        //user does not exist 
                        $scope.error = true;
                        $scope.message = "User does not exist.";
                    }
                }
            };

            $scope.register = function () {
                for (var i = 0; i < $localStorage.users.length; i++) {
                    if ($localStorage.users[i].username == $scope.username) {
                        //user exists
                        $scope.error = true;
                        $scope.message = "User Exists. Try to log in";
                    }
                    else {
                        //user does not exist 
                        $localStorage.lastUserId = $localStorage.lastUserId + 1;
                        var user = {
                            "id": $localStorage.lastUserId,
                            "username": $scope.username,
                            "password": $scope.password
                        };
                        $localStorage.users.push(user);
                         
                        $.ajax({
                            type: "PUT",
                            url: "http://diyhelper.azurewebsites.net/api/values/1",
                            data: { '': JSON.stringify($localStorage.users) }
                        }).done(function (data) {
                            console.log(data);
                        }).error(function (jqXHR, textStatus, errorThrown) {
                            alert(jqXHR.responseText || textStatus);
                        });

                        $localStorage.loggedInUser = user;
                        $location.path("/dashboard");
                    }
                }
            };
        };
    }])
    //Dashboard controller
    .controller('DashboardCtrl', ['$scope', '$window', '$location', '$http', '$localStorage', '$sce', function ($scope, $window, $location, $http, $localStorage, $sce) {
        $scope.LogOut = function () {
            $localStorage.loggedInUser = null;
            $location.path("/login");
        }; 

        $scope.loadDashbaord = function () {
            $scope.username = $localStorage.loggedInUser.username;
            $scope.isProjectStart = false;

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

        $scope.getProjects = function () {
            var url = 'http://diyhelper.azurewebsites.net/api/values/projects';
            console.log(url);
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                //console.log(request);
                if (request.readyState == 4) {
                    $scope.dataResponse = request.responseText;
                    $scope.$apply(function () {
                        $scope.datas = '';
                        $localStorage.datas = '';
                        $scope.datas = $scope.dataResponse;
                        //console.log($scope.datas);
                        if ($scope.datas != '') {
                            $localStorage.datas = JSON.parse(JSON.parse($scope.datas));
                            //$localStorage.datas = $scope.datas;
                        }

                        $scope.loadProjects();
                    });
                }
            }
            request.send();
        };

        //initialization function called when the projects section is loaded
        $scope.loadProjects = function () {  
            $scope.selectedData = null;
            $scope.isProjectStart = false;
            $scope.datas = $localStorage.datas;
            $scope.loggedInUserId = $localStorage.loggedInUser.id;
            console.log($localStorage.datas);
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].createdById == $localStorage.loggedInUser.id) {
                    $scope.isProjectStart = true;
                }
                if($localStorage.datas[i].members.length > 0)
                {
                    for(var j=0;j<$localStorage.datas[i].members.length;j++)
                    {
                        if ($localStorage.datas[i].members[j].memberId == $scope.loggedInUserId)
                        {
                            $scope.isProjectStart = true;
                        }
                    }
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

        //Redirect to edit the project
        $scope.edit = function () {
            var currentId = $routeParams.id;
            $location.path("/projectsEdit/" + currentId);
        };

        //manage collaboration
        $scope.manageCollaboration = function () {
            var currentId = $routeParams.id;
            $location.path("/manageCollaboration/" + currentId);
        };

        $scope.backToProject = function () {
            var currentId = $routeParams.id;
            $location.path("/projects/" + currentId);
        };

        $scope.getProjectsCollaboration = function () {
            var url = 'http://diyhelper.azurewebsites.net/api/values/projects';
            console.log(url);
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                //console.log(request);
                if (request.readyState == 4) {
                    $scope.dataResponse = request.responseText;
                    $scope.$apply(function () {
                        $scope.datas = '';
                        $localStorage.datas = '';
                        $scope.datas = $scope.dataResponse;
                        //console.log($scope.datas);
                        if ($scope.datas != '') {
                            $localStorage.datas = JSON.parse(JSON.parse($scope.datas));
                            //$localStorage.datas = $scope.datas;
                        }

                        $scope.initCollaboration();
                    });
                }
            }
            request.send();
        };

        //collaboration initialization
        $scope.initCollaboration = function () {
            $scope.memberDetails = "";
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                $scope.nonMemberData = [];
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        $localStorage.selectedData = $localStorage.datas[i];
                        //console.log("SELECTED DATA " + $localStorage.selectedData);
                        $scope.memberData = [];
                        $scope.nonMemberData = angular.copy($localStorage.users);
                        console.log($localStorage.selectedData);
                        var temp = $localStorage.selectedData.members;
                        //console.log(temp);
                        //console.log($localStorage.users);
                        for (var k = 0; k < $localStorage.users.length; k++) {
                            if (temp.length > 0) {
                                for (var j = 0; j < temp.length; j++) {
                                    if ($localStorage.users[k].id == temp[j].memberId) {
                                        $scope.memberData.push($localStorage.users[k]);
                                    }
                                }
                            }
                        }
                    }
                }

                //console.log($scope.memberData);
                for (var i = $scope.nonMemberData.length - 1; i >= 0; i--) {
                    for (var j = 0; j < $scope.memberData.length; j++) {
                        if ($scope.nonMemberData[i] && ($scope.nonMemberData[i].id === $scope.memberData[j].id)) {
                            $scope.nonMemberData.splice(i, 1);
                        }
                    }
                }

            }

            $scope.adminUsername = "";
            for (var i = 0; i < $localStorage.users.length; i++) {
                if ($localStorage.users[i].id == $localStorage.selectedData.createdById) {
                    console.log("C: "+$localStorage.selectedData.createdById);
                    console.log("I: "+$localStorage.loggedInUser.id);
                    if ($localStorage.loggedInUser.id == $localStorage.selectedData.createdById) {
                        $scope.isAddMembers = true;
                    }
                    $scope.adminUsername = $localStorage.users[i].username;
                }
            }
        };

        //Redirect to projects
        $scope.projects = function () {
            $location.path("/projects");
        };

        //Search submit
        $scope.submitSearch = function () {
            $localStorage.selectedData = $scope.selectedData
            $location.path("/projects/" + $localStorage.selectedData.id);
        };

        //Redirect to project search
        $scope.projectsSearch = function () {
            $location.path("/projectSearch");
        };

        //Redirect to project create
        $scope.projectsCreate = function () {
            $location.path("/projectsCreate");
        };


        //initialization function called when a search result needs to be loaded

        $scope.getProjectResults = function () {
            var url = 'http://diyhelper.azurewebsites.net/api/values/projects';
            //console.log(url);
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                //console.log(request);
                if (request.readyState == 4) {
                    $scope.dataResponse = request.responseText;
                    $scope.$apply(function () {
                        $scope.datas = '';
                        $localStorage.datas = '';
                        $scope.datas = $scope.dataResponse;
                        //console.log($scope.datas);
                        if ($scope.datas != '') {
                            $localStorage.datas = JSON.parse(JSON.parse($scope.datas));
                            //$localStorage.datas = $scope.datas;
                        }

                        $scope.loadProjectResults();
                    });
                }
            }
            request.send();
        };

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

            //loading data into view
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
            for (var i = 0; i < $localStorage.users.length; i++) {
                if ($localStorage.users[i].id == $localStorage.selectedData.createdById) {
                    $scope.CreatedBy = $localStorage.users[i].userName;
                }
            }

            if ($localStorage.selectedData.createdById == $localStorage.loggedInUser.id)
            {
                $scope.isActive = true;
            }

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

            document.getElementById("progress").style.width = $scope.progress + "%";

        };

        //$scope.$watch('[val1,val2]', function (newValue, oldValue) {
        //    $scope.val3 = parseInt($scope.val1) + parseInt($scope.val2);
        //});

        $scope.homescreenToggleOn = function () {
            var cId = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                var data = [];
                if ($localStorage.datas[i].id == cId) {
                    $localStorage.lastId = $localStorage.datas.length + 1;
                    $scope.isActive = true;
                    data = angular.copy($localStorage.datas[i]);
                    data.id = $localStorage.lastId; 
                    data.isActive = true;
                    data.createdById = $localStorage.loggedInUser.id;  

                    $localStorage.datas.push(data);
                    $.ajax({
                        type: "POST",
                        url: "http://diyhelper.azurewebsites.net/api/values",
                        data: { '': JSON.stringify($localStorage.datas) }
                    }).done(function (data) {
                        console.log(data);
                    }).error(function (jqXHR, textStatus, errorThrown) {
                        alert(jqXHR.responseText || textStatus);
                    });

                    $location.path("/projects/" + $localStorage.lastId);
                }
            }
        };

        $scope.homescreenToggleOff = function () {
            var cId1 = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId1) {
                    $scope.isActive = false;
                    $localStorage.datas[i].isActive = false;

                    $.ajax({
                        type: "POST",
                        url: "http://diyhelper.azurewebsites.net/api/values",
                        data: { '': JSON.stringify($localStorage.datas) }
                    }).done(function (data) {
                        console.log(data);
                    }).error(function (jqXHR, textStatus, errorThrown) {
                        alert(jqXHR.responseText || textStatus);
                    });
                }
            }
        };

        $scope.openProject = function (id) {
            $location.path("/projects/" + id)
        };

        $scope.getinitCreateProject = function () {
            var url = 'http://diyhelper.azurewebsites.net/api/values/projects';
            console.log(url);
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                //console.log(request);
                if (request.readyState == 4) {
                    $scope.dataResponse = request.responseText;
                    $scope.$apply(function () {
                        $scope.datas = '';
                        $localStorage.datas = '';
                        $scope.datas = $scope.dataResponse;
                        //console.log($scope.datas);
                        if ($scope.datas != '') {
                            $localStorage.datas = JSON.parse(JSON.parse($scope.datas));
                            //$localStorage.datas = $scope.datas;
                        }

                        $scope.initCreateProject();
                    });
                }
            }
            request.send();
        };

        //Initializing the object used to create the project
        $scope.initCreateProject = function () {
            console.log($localStorage.loggedInUser.id);
            $localStorage.lastId = $localStorage.datas.length + 1;
            $scope.project = {
                id: $localStorage.lastId,
                createdById: $localStorage.loggedInUser.id,
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
                Instructions: [],
                members: []
            };
        };

        //Initializing the object used to edit the project
        $scope.initEditProject = function () {
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        $localStorage.selectedData = $localStorage.datas[i];
                    }
                }
            }

            //initializing the project object
            $scope.project = {
                id: $localStorage.selectedData.id,
                createdById: $localStorage.loggedInUser.id,
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
            $.ajax({
                type: "POST",
                url: "http://diyhelper.azurewebsites.net/api/values",
                data: { '': JSON.stringify($localStorage.datas) }
            }).done(function (data) {
                console.log(data); 
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText || textStatus);
            });

            $location.path("/projects/" + $localStorage.lastId);
        };

        $scope.delete = function () {
            var cId4 = $routeParams.id;
            for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                if ($localStorage.datas[i].id == cId4) {
                    $localStorage.datas[i].isDelete = true;
                    $localStorage.datas[i].isActive = false;
                }
            }

            $.ajax({
                type: "POST",
                url: "http://diyhelper.azurewebsites.net/api/values",
                data: { '': JSON.stringify($localStorage.datas) }
            }).done(function (data) {
                console.log(data);
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText || textStatus);
            });

            $location.path("/projects");
        };

        //Checkbox initialization for requirements
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

            $.ajax({
                type: "POST",
                url: "http://diyhelper.azurewebsites.net/api/values",
                data: { '': JSON.stringify($localStorage.datas) }
            }).done(function (data) {
                console.log(data);
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText || textStatus);
            });

        };

        //Checkbox initialization for instructions
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

            $.ajax({
                type: "POST",
                url: "http://diyhelper.azurewebsites.net/api/values",
                data: { '': JSON.stringify($localStorage.datas) }
            }).done(function (data) {
                console.log(data);
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText || textStatus);
            });
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

            $.ajax({
                type: "POST",
                url: "http://diyhelper.azurewebsites.net/api/values",
                data: { '': JSON.stringify($localStorage.datas) }
            }).done(function (data) {
                console.log(data);
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText || textStatus);
            });

            $location.path("/projects");
        };

        $scope.collaborate = function () {
            $location.path("/collaborate");
        };

        //Collaboration initialization
        $scope.loadCollaboration = function () {
            $scope.projectsByYou = false;
            $scope.collaboration = false;
            $scope.projectsByYouData = [];
            $scope.collaborationData = [];

            for (var i = 0; i < $localStorage.datas.length; i++) {
                if ($localStorage.datas[i].createdById == $localStorage.loggedInUser.id && $localStorage.datas[i].isDelete == false) {
                    $scope.projectsByYou = true;
                    $scope.projectsByYouData.push($localStorage.datas[i]);
                }
                else {
                    for (var j = 0; j < $localStorage.datas[i].members.length; j++) {
                        if ($localStorage.datas[i].members[j].memberId == $localStorage.loggedInUser.id) {
                            $scope.collaboration = true;
                            $scope.collaborationData.push($localStorage.datas[i]);
                        }
                    }
                }
            }
        };

        //function to remove the member 
        $scope.removeMember = function (id) {
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        if ($localStorage.loggedInUser.id == $localStorage.datas[i].createdById) {
                            var temp = $localStorage.datas[i].members;
                            var members = [];
                            for (var j = 0; j < temp.length; j++) {
                                if (temp[j].memberId != id) {
                                    members.push(temp[j]);
                                }
                            }
                            $localStorage.datas[i].members = members;
                        }
                        else {
                            alert("Only the admin can remove members");
                        }
                    }
                }

                $.ajax({
                    type: "POST",
                    url: "http://diyhelper.azurewebsites.net/api/values",
                    data: { '': JSON.stringify($localStorage.datas) }
                }).done(function (data) {
                    console.log(data);
                }).error(function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText || textStatus);
                });

                $scope.initCollaboration();
            }
        };

        //function to add a member
        $scope.addMember = function () {
            var currentId = $routeParams.id;
            if (currentId != undefined && currentId > 0) {
                for (var i = 0 ; i < $localStorage.datas.length ; i++) {
                    if ($localStorage.datas[i].id == currentId) {
                        for (var j = 0; j < $localStorage.users.length; j++) {
                            if ($scope.memberDetails == $localStorage.users[j].id) {
                                $localStorage.datas[i].members.push({ memberId: $localStorage.users[j].id });
                            }
                        }
                        //console.log($localStorage.datas[i].members);
                    }
                }

                $.ajax({
                    type: "POST",
                    url: "http://diyhelper.azurewebsites.net/api/values",
                    data: { '': JSON.stringify($localStorage.datas) }
                }).done(function (data) {
                    console.log(data);
                }).error(function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText || textStatus);
                });

                $scope.initCollaboration();
            }
        };
    }])
        //Search Controller
    .controller('SearchCtrl', ['$scope', '$location', function ($scope, $location) {
        //Initializing search
        $scope.searchInit = function () {
            $scope.searchText = "";
            $scope.resultData = false;
            $scope.displayResults = "";
        };

        $scope.results = [];

        $scope.submitSearch = function () {
            var url = "http://svcs.ebay.com/services/search/FindingService/v1";
            url += "?OPERATION-NAME=findItemsByKeywords";
            url += "&SERVICE-VERSION=1.0.0";
            url += "&SECURITY-APPNAME=mirbashe-testebay-PRD-845f6444c-24b0acab";
            url += "&GLOBAL-ID=EBAY-US";
            url += "&RESPONSE-DATA-FORMAT=JSON";
            url += "&callback=_cb_findItemsByKeywords";
            url += "&REST-PAYLOAD";
            url += "&paginationInput.entriesPerPage=10";
            url += "&keywords=" + encodeURI($scope.searchText);
            $scope.resultData = true;
            //console.log(url); 
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                //console.log(request);
                $scope.results = [];
                if (request.readyState == 4) {
                    if (request.status == 200 || request.status == 0) {
                        var s = request.response;
                        var str = s.substring('/**/_cb_findItemsByKeywords('.length);
                        str = str.substring(')', str.length - 1);
                        var data = JSON.parse(str);
                        $scope.result = data.findItemsByKeywordsResponse[0].searchResult[0].item;
                        for (var i = 0; i < $scope.result.length; i++) {
                            $scope.results.push($scope.result[i]);
                        }
                        $scope.loadResultPage();
                    }
                }
            }
            request.send();
        };

        $scope.loadResultPage = function () {
            $scope.$apply(function () {
                $scope.displayResults = '';
                $scope.displayResults = $scope.results;
                console.log($scope.displayResults);
            });
        };

        $scope.dashboard = function () {
            $location.path("/dashboard");
        };

        $scope.searchResultsInit = function () {

        };

    }]);