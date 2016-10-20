App.controller('ChatCtrl', ['$scope', 'MessagesService', 'UsersService', ($scope, MessagesService, UsersService) => {
  
  $scope.chatMode = false;
  $scope.loginMode = false;
  $scope.messages = MessagesService.getMessages();
  $scope.users = UsersService.getUsers();

  $scope.user = {
  	name: "",
  	message: ""
  }

  $scope.launchChat = (name) => {
  	if (name) {
  		$scope.user.name = name;
		  $scope.chatMode = true;

		  UsersService.setUser(name);
  	};
  }

  $scope.postMessage = () => {
  	if($scope.user.message) {
  		MessagesService.addMessage({
  			name: $scope.user.name,
  			message: $scope.user.message
  		});

  		$scope.user.message = "";
  	}
  }

	$scope.logBackIn = (index) => {
		$scope.loginMode = false;
		$scope.chatMode = true;
		$scope.user.name = $scope.users[index].name;

		UsersService.updateLoginStatus(index,true);
	}

  $scope.newUser = () => {
    $scope.loginMode = false;
    $scope.chatMode = false;
  }

	$scope.$watch('users', () => {
		if($scope.users.length > 0) {
			$scope.chatMode = true;
			$scope.loginMode = true;
		}
	});

}]);