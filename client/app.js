var app = angular.module("myWorld", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when("/", {
            controller: "HomeCtrl",
            templateUrl: "/templates/index.html"
        })
        .when("/people", {
            controller: "PeopleCtrl",
            templateUrl: "/templates/people/list.html"
        })
        .when("/things", {
            controller: "ThingsCtrl",
            templateUrl: "/templates/things/list.html"
        });
        
        $locationProvider.html5Mode(true);
});

app.controller("HomeCtrl", function($scope, HeaderSvc){
    HeaderSvc.setTab("Home");
    $scope.foo = Math.random();
});

app.controller("PeopleCtrl", function(HeaderSvc){
    HeaderSvc.setTab("People");
});

app.controller("ThingsCtrl", function(HeaderSvc){
    HeaderSvc.setTab("Things");
});

app.factory("HeaderSvc", function(){
    var _tabs = [
        { title: "Home", path: "/" },
        { title: "People", path: "/people" },
        { title: "Things", path: "/things" }
    ];
    return {
        tabs: _tabs,
        setTab: function(title){
            for(var i = 0 ; i < _tabs.length; i++){
                if(title == _tabs[i].title){
                    _tabs[i].active = true;
                }
                else{
                    _tabs[i].active = false;
                }
            }
        }
    }; 
});

app.controller("HeaderCtrl", function($scope, HeaderSvc){
    $scope.tabs = HeaderSvc.tabs;
});

