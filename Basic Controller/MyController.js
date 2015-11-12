var myApp = angular.module('MyApp', []);

myApp.controller('MyController', function ($scope) {
	
	var person = {
		name : "SHRAVAN",
		age : 20
	};

	$scope.myPerson = person;

});		