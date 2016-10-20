App.controller('MainCtrl', ['$scope', '$window', '$compile', ($scope, $window, $compile) => {

	$scope.rebootApp = () => {
		localStorage.clear();
		$window.location.reload();
	};

	$scope.addChatBox = () => {
		var chatboxes = angular.element(document.querySelector('.chatboxes'));
		var chatbox = $compile('<div class="col-sm-6"><chat-box></chat-box></div>')($scope);
		chatboxes.append(chatbox);
	};

}]);