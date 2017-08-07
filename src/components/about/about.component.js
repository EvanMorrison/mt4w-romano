module.exports = function(ngModule) {
  ngModule
    .component('about', {
      template: require('./about.template.html'),
      controller: [
                      'DataServ',
                      AboutController
                  ],
      controllerAs: 'vm'
    });

    function AboutController(DataServ) {
      const vm = this;

      vm.sideimage = DataServ.sideImages.about;
    }

}
