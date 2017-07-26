module.exports = function(ngModule) {
  ngModule
    .component('about', {
      template: require('./about.template.html'),
      controller: [AboutController],
      controllerAs: 'ctrl'
    });

    function AboutController() {
      const ctrl = this;
    }

}
