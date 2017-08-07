module.exports = function(app) {
  app
    .component('lymphatic', {
      template: require('../singleService.template.html'),
      controller: [ 
                    'DataServ',
                    LymphaticController
      ],
      controllerAs: 'vm'
    })

    function LymphaticController (DataServ) {
      const vm = this;
      
      vm.pageContent = DataServ.modalities.lymphatic

      vm.sideimage = DataServ.sideImages.lymphatic;
    }
}