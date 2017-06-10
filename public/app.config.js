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
        .otherwise('/', {
          template: '<home-component></home-component>'
        });

      }
    ])

})();