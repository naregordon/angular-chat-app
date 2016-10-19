App.directive('scrollBottom', () => {
  return {
    scope: {
      scrollBottom: "="
    },
    link(scope, element) {
      scope.$watchCollection('scrollBottom', (newValue) => {
        if (newValue) 
          $(element).scrollTop($(element)[0].scrollHeight);
      });
    }
  }
})