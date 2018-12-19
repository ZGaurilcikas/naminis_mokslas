app.controller('MainController', ['$scope', 'ip', function($scope, ip){
	ip.then(function(data){
		$scope.ip = data;
	})
}]);
