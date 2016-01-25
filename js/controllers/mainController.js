app.controller('appController', ['$scope', function ($scope) {
	"use strict";

	/*Counter nb of apps*/
	$scope.counter = 0;

	/*Scope DB of apps*/
	$scope.appDB = [];

	$scope.like = function (appIndex) {
		$scope.appDB[appIndex].likes = $scope.appDB[appIndex].likes + 1;
	};
	$scope.generateApp = function () {
		console.log("Click");
		$scope.counter++;
		
		$scope.ranname = chance.name();

		var element = {
			name: $scope.ranname + " app",
			number: $scope.counter,
			likes: 0,
			img: "http://lorempixel.com/400/400/sports/" + $scope.counter + "/"
		};
		$scope.appDB.push(element);
	};
}]);

