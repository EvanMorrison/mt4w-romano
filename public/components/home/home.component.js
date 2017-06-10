(function() {

  angular.module('Home', [])
  .component('homeComponent', {
    templateUrl: '/components/home/home.template.html',
    controller: HomeController
  });

  function HomeController() {
    var ctrl = this;
    ctrl.title = 'Manual Therapy for Wellness'
    ctrl.provider = {
      name: 'Trish Romano',
      email: 'patriciaromano@cox.net',
      tel: '310-283-9382',
      address1: '9458 E Ironwood Square Dr, Suite 102',
      address2: 'Scottsdale, AZ 85255'
    }
    
  }

})()
