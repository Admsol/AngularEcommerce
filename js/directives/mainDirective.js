app.directive('appDesc', function () {
	return	{
		restrict: 'E',
		scope: { 
			myApp: '=info' 
		},
		templateUrl: 'js/directives/appDesc.html'
	};
});