angular.module("users")
.directive("userItem", function() {
	return {
		restrive: "E",
		scope: {
			user: "=user",			
			removeUserFunc: "=removeUserFunc"
		},
		templateUrl: "directives/userItem/user-item.template.html"
	}
});