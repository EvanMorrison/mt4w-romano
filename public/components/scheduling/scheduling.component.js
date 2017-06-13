(function() {

  angular.module('Scheduling', [])
    .component('scheduling', {
      templateUrl: '/components/scheduling/scheduling.template.html',
      controller: [SchedulingController]
    })

    function SchedulingController() {
      const ctrl = this;
    }

})()
