App.directive('chatBox', () => {
    return {
        templateUrl: 'app/templates/chat-box.html',
        controller: 'ChatCtrl',
        replace: true,
        scope: true
    }
});