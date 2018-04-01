angular.module("users")
.controller("usersCtrl", ["$location", "$anchorScroll", "usersService", "mapService", "utilsService",
function($location, $anchorScroll, usersService, mapService, utilsService) {
	var _this = this;
	_this.users = [];	
	_this.orderByField = '';
	_this.removeUser = removeUser;
	_this.addUser = addUser;
	_this.sortBy = sortBy;
	
	function init(){		
		usersService.getAll()
		.then((users) => {
			_this.users = users; 
			_this.users.forEach((user, index) => {				
				mapService.setMarker(user.latitude, user.longitude, 
					user.name, goToAnchor(index));
			});
		});
	}		

	function goToAnchor(x) {			
		var index = x;
		
		return () => {			
			$location.hash('anchor' + index);
			$anchorScroll();			
		}
  	}  	

	function removeUser(user) {		
		var index = _this.users.indexOf(user);
		_this.users.splice(index, 1);
		mapService.removeMarker(index);
	}

	function addUser(user){		
		var newUser = {
			isActive: user.isActive,
			id: utilsService.generateObjectId(),
			name: user.name,
			age: user.age,
			imageUrl: user.imageUrl,
			email: user.email,
			latitude: user.latitude,
			longitude: user.longitude,			
		}
		
		_this.users.push(newUser);		
		mapService.setMarker(user.latitude, user.longitude, user.name, user.email);
	}

	function sortBy(field){
		_this.orderByField = field;
	}
	
	init();
}]);
