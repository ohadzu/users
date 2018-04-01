angular.module("users")
.service("usersService", ["ENDPOINT_URI", "$http", "$q", function(ENDPOINT_URI, $http, $q) {
	let _this = this;
	let users = []; 
	_this.getAll = getAll;

	function getAll(){ 		
		var deferred = $q.defer();
		$http.get(ENDPOINT_URI)
			.then((result) => {
				deferred.resolve(result.data);
			})

		return deferred.promise;
	}	

}]);