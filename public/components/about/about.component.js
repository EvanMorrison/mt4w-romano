(function() {

  angular.module('About', [])
  .component('aboutComponent', {
    templateUrl: '/components/about/about.template.html',
    controller: [AboutController]
  });

  function AboutController() {
    const ctrl = this;
    ctrl.content = 'Manual Therapy for Wellness is a multi-disciplinary approach to health and wellbeing, incorporating massage, lymphatic therapy, and myofascial release.' 
  }

})()
