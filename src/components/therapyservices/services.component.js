module.exports = function(ngModule) {
  ngModule
    .component('services', {
      template: require('./services.template.html'),
      controller: [
                    'DataServ',
                    ServicesController
                  ],
      controllerAs: 'vm'
    });

    function ServicesController(DataServ) {
      const vm = this;

      // picture to show in side div
      vm.sideimage = DataServ.sideImages.services;

      vm.content= 'Manual Therapy for Wellness provides several services at compentetive rates that provide synergistic benefits, relief from pain and stress, improved mobility, strengthened immune system, and reduction of swelling.'
    }

}
