
module.exports = function(ngModule) {
  ngModule
      .component('navbar', {
        template: require('./navbar.template.html'),
        controller: [ 
                      '$mdSidenav',
                      '$state',
                      NavbarController
                    ],
        controllerAs: 'vm'
      });

      function NavbarController($mdSidenav, $state) {
        const vm = this;
        vm.toggleNav = function($event) {
            if ($event.target.text === 'Home') vm.athome = true;
            else vm.athome = false;
            $mdSidenav('left').toggle();
        }

          vm.logoImg = require('../../assets/logos/MTW-1800x1800-mono-blue.png');

      }

}
