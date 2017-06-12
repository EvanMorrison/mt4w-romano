(function() {

  angular.module('Scheduling', [])
    .component('schedulingComponent', {
      templateUrl: '/components/scheduling/scheduling.template.html',
      controller: [SchedulingController]
    })

    function SchedulingController() {
      const ctrl = this;
      ctrl.content = 'Appointments are available seven days a week. We welcome new clients, please call or text 310-283-9382.'
    }

})()
