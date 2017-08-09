module.exports = function(HomeModule) {
  HomeModule
    
    .component('home', {
      template: require('./home.template.html'),
      controller: [
                      'DataServ',
                      HomeController
                    ],
      controllerAs: 'vm'
    });

    function HomeController(DataServ, $mdDialog) {
      var vm = this;

      vm.provider = {
        name: 'Trish Romano',
        email: 'trish@manualtherapy4wellness.com',
        tel: '310-283-9382',
        address1: '9458 E Ironwood Square Dr, Suite 102',
        address2: 'Scottsdale, AZ 85255'
      }
      
      
    }

}
