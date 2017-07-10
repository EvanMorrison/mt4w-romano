
module.exports = function(ngModule) {
  ngModule
      .component('navbar', {
        template: require('./navbar.template.html'),
        controller: ['$mdSidenav', NavbarController],
        controllerAs: 'ctrl'
      });

      function NavbarController($mdSidenav) {
        const ctrl = this;
        ctrl.toggleNav = function() {
            console.log('toggling')
            $mdSidenav('left').toggle();
        }
      }

}
