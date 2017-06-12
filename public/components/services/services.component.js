(function() {

  angular.module('Services', [])
    .component('servicesComponent', {
      templateUrl: '/components/services/services.template.html',
      controller: [ServicesController]
    });

    function ServicesController() {
      const ctrl = this;
      ctrl.content= 'Manual Therapy for Wellness provides several services at compentetive rates that provide synergistic benefits, relief from pain and stress, imporved mobility, strengthened immune system, reduction to swelling, etc.'
    }

})();
