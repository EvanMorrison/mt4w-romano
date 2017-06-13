(function() {

  angular.module('About', [])
  .component('about', {
    templateUrl: '/components/about/about.template.html',
    controller: [AboutController]
  });

  function AboutController() {
    const ctrl = this;
  }

})()
