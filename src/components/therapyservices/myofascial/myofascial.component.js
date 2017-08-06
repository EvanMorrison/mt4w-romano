module.exports = function(app) {
  app
    .component('myofascial', {
      template: require('../singleService.template.html'),
      controller: [ 
                    'DataServ',
                    MyofascialController
      ],
      controllerAs: 'vm'
    })

    function MyofascialController (DataServ) {
      const vm = this;
      
      vm.pageContent = DataServ.modalities.myofascial;
    }
}