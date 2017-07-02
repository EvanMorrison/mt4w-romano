(function() {

  angular.module('Navbar')
    .component('navbarLinks', {
      templateUrl: 'components/navbar/navLinks.template.html',
      controller: [NavLinkController],
      controllerAs: 'ctrl',
      bindings: { onChange: '&' }
    });

    function NavLinkController () {
      const ctrl = this;

      ctrl.closeSidenav = function() {
          ctrl.onChange();
      }
      
        ctrl.navLinks = [
          { label: "Home",
            state: "home"
          },
          { label: "Services & Pricing",
            state: "services"
          },
          {
            label: "About Us",
            state: 'about'
          },
          {
            label: "Scheduling an Appointment",
            state: 'appointments'
          }
         ]
        

    }


}())