(function(){
var practiceModule=angular.module("practiceModule");

var mainController=function($scope,$interval,$log,$location)
{
	
	
	function deCount()
	{
		$scope.countDown-=1;
		
		if($scope.countDown<1)
		{
			$scope.search($scope.username);
		}
	}
	var count;
	function startCount()
	{
		 count=$interval(deCount,1000,$scope.countDown);
	}

	$scope.search=function(username){
		$log.info("in search");
		if($scope.countDown >=1)
		{
			$interval.cancel(count);
		}
	
		$scope.countDown=null;
		$location.path("/user/"+username)
		
	}
	$scope.countDown=5;
	startCount();
}

practiceModule.controller("mainController",mainController);
}());