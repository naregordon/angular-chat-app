App.service('MessagesService', function() {

	let messages = JSON.parse(localStorage.getItem('chatAppMessages')) || [];

    this.getMessages = () => {
        return messages;
    };

    this.addMessage = (data) => {
        messages.push(data);
        this.saveMessagesToLocalstorage();
    };

    this.saveMessagesToLocalstorage = () => {
    	localStorage.setItem('chatAppMessages', JSON.stringify(messages));
    };

});