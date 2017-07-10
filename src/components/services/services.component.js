module.exports = function(ngModule) {
  ngModule
    .component('services', {
      template: require('./services.template.html'),
      controller: [ServicesController],
      controllerAs: 'ctrl'
    });

    function ServicesController() {
      const ctrl = this;
      ctrl.content= 'Manual Therapy for Wellness provides several services at compentetive rates that provide synergistic benefits, relief from pain and stress, improved mobility, strengthened immune system, and reduction of swelling.'
    }

}
