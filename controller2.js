var app = angular.module("myModule");

app.controller("controller2", function($scope, myService) {
	var newValues = myService.valueSetter();
			$scope.adjective1 = newValues.adjective1;
		 	$scope.verb1 = newValues.verb1;
		 	$scope.noun1 = newValues.noun1;
		 	$scope.liquid = newValues.liquid;
		 	$scope.noun2 = newValues.noun2;
		 	$scope.person = newValues.person;
		 	$scope.place = newValues.place;
		 	$scope.occupation = newValues.occupation;
		 	$scope.noun3 = newValues.noun3;
		 	$scope.nationality = newValues.nationality;
		 	$scope.female = newValues.female;
		 	$scope.noun4 = newValues.noun4;
		 	$scope.friend = newValues.friend;
		 	$scope.noun5 = newValues.noun5;
		 	$scope.number = newValues.number;
		 	$scope.adjective2 = newValues.adjective2;
});