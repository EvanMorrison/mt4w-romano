
module.exports = function(ngModule) {
  ngModule
      .component('navbar', {
        template: require('./navbar.template.html'),
        controller: ['$mdSidenav', NavbarController],
        controllerAs: 'vm'
      });

      function NavbarController($mdSidenav) {
        const vm = this;
        vm.toggleNav = function() {
            console.log('toggling')
            $mdSidenav('left').toggle();
        }

          vm.logoImg = require('../../assets/MTW logo 14 600x587.png');
      }

}
