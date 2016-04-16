var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/input",
	{
		controller: "controller1",
		templateUrl: "view1.html"
	})
	.when("/output",
	{
		controller: "controller2",
		templateUrl: "view2.html"
	})
	.otherwise({redirectTo: "/"});
});