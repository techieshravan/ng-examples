var myApp1 = angular.module("MyApplication1", []);

myApp1.controller("MyExampleController", function ($scope) {

	var venue = {
		id: 1234567,
		name: "The Event Space",
		city: "Bristol",
		country: "United Kingdom",
		latitude: 51.444674,
		longitude: -2.605731,
		country_code: "GB",
		url: 'header.jpg'
	};

	$scope.venue = venue;

	$scope.handleCickMe = function (data) {
		alert(data);
	};
});