(function() {

  angular.module('About', [])
  .component('aboutComponent', {
    templateUrl: '/components/about/about.template.html',
    controller: [AboutController]
  });

  function AboutController() {
    const ctrl = this;
  }

})()
