(function()
{
	var app=angular.module("practiceModule",["ngRoute"]);	
		app.config(function($routeProvider){
			
			$routeProvider.
			when('/main',{
				controller: "mainController",
				templateUrl: "main.html"
				
			}).
			when("/user/:username",{
				templateUrl:"userhtml",
				controller: "userController"
				
			})
			.otherwise({redirectTO:'/main'})
			
			
			
			
			
			
			
			
		});
		
		
		
}());