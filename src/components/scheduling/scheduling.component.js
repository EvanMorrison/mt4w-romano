module.exports = function(ngModule) {
  ngModule
    .component('scheduling', {
      template: require('./scheduling.template.html'),
      controller: [SchedulingController],
      controllerAs: 'ctrl'
    })

    function SchedulingController() {
      const ctrl = this;
    }

}
