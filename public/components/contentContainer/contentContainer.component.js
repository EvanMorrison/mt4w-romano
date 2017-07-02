(function() {

  angular.module('MTWApp')
    .component('mainContainer', {
      templateUrl: 'components/contentContainer/contentContainer.template.html',
      controller: [MainContainerController],
      controllerAs: 'ctrl'
    })

  function MainContainerController() {
    const ctrl = this;

  }
  
}());