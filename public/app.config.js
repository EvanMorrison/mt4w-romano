(function() {

  angular
    .module('MTWApp')
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);


        $routeProvider
        .when('/', {
          template: '<home-component></home-component>'
        })
        .when('/about', {
          template: '<about-component></about-component>'
        })
        .when('/services', {
          template: '<services-component></services-component>'
        })
        .when('/appointments', {
          template: '<scheduling-component></scheduling-component>'
        })
        .otherwise('/');

      }
    ])

})();