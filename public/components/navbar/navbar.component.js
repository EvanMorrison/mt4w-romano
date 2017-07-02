(function() {

  angular.module("Navbar", [])
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.template.html',
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

})()
