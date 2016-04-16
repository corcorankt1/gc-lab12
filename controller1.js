var app = angular.module("myModule");

app.controller("controller1", [
"$scope", "myService", function($scope, myService) {
	$scope.addValues = function() {
		var savedData = {
		 	adjective1: $scope.adjective1,
		 	verb1: $scope.verb1,
		 	noun1: $scope.noun1,
		 	liquid: $scope.liquid,
		 	noun2: $scope.noun2,
		 	person: $scope.person,
		 	place: $scope.place,
		 	occupation: $scope.occupation,
		 	noun3: $scope.noun3,
		 	nationality: $scope.nationality,
		 	female: $scope.female,
		 	noun4: $scope.noun4,
		 	friend: $scope.friend,
		 	noun5: $scope.noun5,
		 	number: $scope.number,
		 	adjective2: $scope.adjective2
		 }
		myService.valueGetter(savedData);
	}
}]);