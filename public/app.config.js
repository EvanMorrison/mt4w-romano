(function() {

  angular
    .module('MTWApp')

    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
      $mdThemingProvider.theme('alt')
        .primaryPalette('light-green')
        .accentPalette('purple')
        .warnPalette('red')

      
      
    })

    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
      function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('main', {
            url:'/',
             views: {
                'navbar': {component: 'navbar'},
                'contentContainer': {component: 'home'}
              }
          })
          .state('home', {
            parent: 'main',
            url: '',
            views: {
              'contentContainer@': {component: 'home'}
            }
          })
          .state('about', {
            parent: 'main',
            url: 'about',
            views: {
              'contentContainer@': {component: 'about'}
            }
          })
          .state('services', {
            parent: 'main',
            url: 'services',
            views: { 
              'contentContainer@': {component: 'services'}
          }
          })
          .state('appointments', {
            parent: 'main',
            url: 'appointments',
            views: {
              'contentContainer@': {component: 'scheduling'}
          }
          })

        
      }
    ])

})();