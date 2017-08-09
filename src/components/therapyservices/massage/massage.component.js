module.exports = function(app) {
  app
    .component('massage', {
      template: require('../singleService.template.html'),
      controller: [ 
                      'DataServ',
                      MassageController
      ],
      controllerAs: 'vm'
    })

    function MassageController (DataServ) {
      const vm = this;

        vm.pageContent = DataServ.modalities.massage;

        vm.sideimage = DataServ.sideImages.massage;
    }
}