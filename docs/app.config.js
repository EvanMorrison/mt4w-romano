(function() {

  angular
    .module('MTWApp')
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
      function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');


        $stateProvider
          .state('home', {
            url: '/',
            component: 'home'
          })
          .state('about', {
            url: '/about',
            component: 'about'
          })
          .state('services', {
            url: '/services',
            component: 'services'
          })
          .state('scheduling', {
            url: '/appointments',
            component: 'scheduling'
          })

        
      }
    ])

})();