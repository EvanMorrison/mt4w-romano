
module.exports = function(ngModule) {

  ngModule

    .config(['$mdThemingProvider', function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
      $mdThemingProvider.theme('alt')
        .primaryPalette('cyan')
        .accentPalette('purple')
        .warnPalette('red')
    }])

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
          .state('layout', {
            url: '',
            parent: 'main', 
            views: {
              'contentContainer@': { template: require('./components/layout/viewLayout.template.html')}
            }
          })
          .state('about', {
            url: 'about',
            parent: 'layout',
            views: {
              '@layout': { component: 'about' }
          }
            
          })
          .state('services', {
            parent: 'layout',
            url: 'services',
            views: { 
              '@layout': {component: 'services'}
          }
          })
          .state('appointments', {
            parent: 'layout',
            url: 'appointments',
            views: {
              '@layout': {component: 'scheduling'}
          }
          })

        
      }
    ])

}
