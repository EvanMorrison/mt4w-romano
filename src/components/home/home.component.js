module.exports = function(HomeModule) {
  HomeModule
    
    .component('home', {
      template: require('./home.template.html'),
      controller: [
                      'DataServ',
                      '$mdDialog',
                      HomeController
                    ],
      controllerAs: 'vm'
    });

    function HomeController(DataServ, $mdDialog) {
      var vm = this;

      vm.heroCards = DataServ.heroCards;

      vm.provider = {
        name: 'Trish Romano',
        email: 'trish@manualtherapy4wellness.com',
        tel: '310-283-9382',
        address1: '9458 E Ironwood Square Dr, Suite 102',
        address2: 'Scottsdale, AZ 85255'
      }
      
      // open modal panels with more info on modalities
      vm.showPopup = function(ev, card) {
        vm.currentCard = card;
        $mdDialog.show({
          template: require('./dialog.template.html'),
          id: 'homepagePopup',
          controller: DialogController,
          controllerAs: 'ctrl',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: true // only for -xs and -sm breakpoints
        })
      }


      // controller function for modal panel
      DialogController.$inject = [ 'DataServ', '$mdDialog' ];
      function DialogController(DataServ, $mdDialog) {
        this.parent = vm;
        this.cardName = this.parent.currentCard.name;
        this.info = DataServ.modalities[this.cardName].bodyText;

        this.closeDialog = function(ev) {
          $mdDialog.cancel();
        }
      }

      
      
    }

}
