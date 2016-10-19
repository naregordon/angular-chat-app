App.controller('MainCtrl', ['$scope', '$window', ($scope, $window) => {

	$scope.rebootApp = () => {
		localStorage.clear();
		$window.location.reload();
	};

}]);