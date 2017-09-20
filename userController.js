(function(){
var practiceModule=angular.module("practiceModule");

var userController=function($scope,github,$routeParameter)
{
	function onComplete(response)
	{
		$scope.user=response;
		github.getRepo($scope.user.repos_url).then(onRepo,onError);
	}
	function onError()
	{
		
		$scope.error="couldn't fetch the data.";
	}
	function onRepo(response)
	{
		$scope.repos=response;
		
		
	}
	
	
	$scope.username=$routeParameter.username;
	$scope.option="stargazers_count";
	
	github.getUser($scope.username).then(onComplete,onError);
	
}

practiceModule.controller("userController",userController);
}());