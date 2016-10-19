App.service('UsersService', function() {

	let users = JSON.parse(localStorage.getItem('chatAppUsers')) || [];

    // Disconect all users on load
    users.forEach( user => user.connected = false );

    this.getUsers = () => {
        return users;
    };

    this.setUser = (name) => {
        users.push({
        	name,
        	connected: true
   		});
        this.saveUsersToLocalstorage();
    };

    this.updateLoginStatus = (index, isConnected) => {
    	users[index].connected = isConnected;

    	this.saveUsersToLocalstorage();
    };

    this.saveUsersToLocalstorage = () => {
    	localStorage.setItem('chatAppUsers', JSON.stringify(users));
    };

});