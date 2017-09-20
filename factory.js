(function(){var github =function($http)
	{
		 function getUser(name)
		 {
				return $http.get("https://api.github.com/users/"+name).then(function(response){
					
					return response.data;
				});
		
				
		 }
		 
		 function getRepo(repo)
		 {
			 return $http.get(repo).then(function(response){
				 return response.data;
			 });
		 }
		return {
			"getUser": getUser,
			"getRepo": getRepo
		};

	}
	var module=angular.module("practiceModule");
	module.factory("github",github);
}());