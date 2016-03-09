angular.module("appstoreApp", ['angular-toArrayFilter']);
(function () {

	angular
		.module("appstoreApp")
		.controller("unitController", unitController);

	function unitController($scope) {
		$scope.productList = {
			product1: {
				name: "Magic Tablet",
				img: "http://lorempixel.com/200/200/technics/1",
				number: "1"
			},
			product2: {
				name: "Something Else",
				img: "http://lorempixel.com/200/200/technics/2",
				number: "2"
			},
			product3: {
				name: "Another great product",
				img: "http://lorempixel.com/200/200/technics/3",
				number: "3"
			},
			product4: {
				name: "Best seller product",
				img: "http://lorempixel.com/200/200/technics/4",
				number: "4"
			},
			product5: {
				name: "Out of stock product",
				img: "http://lorempixel.com/200/200/technics/5",
				number: "5"
			},
			product6: {
				name: "Technics product",
				img: "http://lorempixel.com/200/200/technics/6",
				number: "6"
			},
			product7: {
				name: "Product well designed",
				img: "http://lorempixel.com/200/200/technics/7",
				number: "7"
			}

		};
      
      console.table($scope.productList);

		$scope.deleteProduct = function(number) {
			var name = "product" + number;
			console.log("X" + number + "X");
			delete $scope.productList[name];
		}
	}

})();
