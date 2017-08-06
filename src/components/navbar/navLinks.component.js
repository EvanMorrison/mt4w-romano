module.exports = function(ngModule) {
  ngModule
    .component('navbarLinks', {
      template: require('./navLinks.template.html'),
      controller: [   '$mdMenu',
                      NavLinkController],
      controllerAs: 'vm',
      bindings: { onChange: '&' }
    });

    function NavLinkController ($mdMenu) {
      const vm = this;

      vm.closeSidenav = function() {
          vm.onChange();
      }
      
      vm.openMenu = function($mdMenu, ev) {
        ev.preventDefault();
        $mdMenu.open(ev);
      }

        vm.navLinks = [
          { label: "Home",
            state: "home",
            isMenu: false,
            menuItems: []
          },
          { label: "Services & Pricing",
            state: "services",
            isMenu: true,
            menuItems: [
              { label: 'Services & Pricing',
                state: "services"
              },
              { label: 'Massage',
                state: 'massage'
              },
              { label: "Manual Lymphatic Drainage",
                state: "lymphatic"
              },
              { label: "Myofascial Release",
                state: 'myofascial'}
          ]
          },
          {
            label: "About Us",
            state: 'about',
            isMenu: false,
            menuItems: []
          },
          {
            label: "Make an Appointment",
            state: 'appointments',
            isMenu: false,
            menuItems: []
          }
         ]
        

    }


}