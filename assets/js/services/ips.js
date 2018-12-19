app.factory("ip", ['$http', function($http){
	return $http.get('https://jsonip.com/')
	.then(function(data){ 
		return data; 
		
	})
	
}])