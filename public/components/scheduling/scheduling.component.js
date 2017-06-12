(function() {

  angular.module('Scheduling', [])
    .component('schedulingComponent', {
      templateUrl: '/components/scheduling/scheduling.template.html',
      controller: [SchedulingController]
    })

    function SchedulingController() {
      const ctrl = this;
    }

})()
