angular.module("users")
.directive("header", function() {
	return {
		restrive: "E",
		scope:{
			addUserFunc: "=addUserFunc"
		},
		templateUrl: "directives/header/header.template.html",
		link: function ($scope, element, attrs) {
			$scope.newUser = {};

			$scope.submit = function submit()  {				
				$scope.addUserFunc($scope.newUser);
				$scope.newUser = {};				
			}
			
        }
	}
});