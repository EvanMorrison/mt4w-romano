
module.exports = function(ngModule) {

  ngModule

    .config(['$mdThemingProvider', function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
      $mdThemingProvider.theme('alt')
        .primaryPalette('cyan')
        .accentPalette('purple')
        .warnPalette('red')
    }])

    .run(['$rootScope', '$state', '$anchorScroll', function($rootScope, $state, $anchorScroll){
      $rootScope.$on("$locationChangeSuccess", function(){
        $anchorScroll();
    })
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
          
          .state('about', {
            url: 'about',
            parent: 'main',
            views: {
              'contentContainer@': { component: 'about' }
          }
            
          })
          .state('services', {
            parent: 'main',
            url: 'services',
            views: { 
              'contentContainer@': {component: 'services'}
          }
          })
            .state('massage', {
              parent: 'services',
              url: '/massage',
              views: {
                'contentContainer@': {component: 'massage'}
              }
            })
            .state('lymphatic', {
              parent: 'services',
              url: '/manualLymphaticDrainage',
              views: {
                'contentContainer@': {component: 'lymphatic'}
              }
            })
            .state('myofascial', {
              parent: 'services',
              url: '/myofascialRelease',
              views: {
                'contentContainer@': { component: 'myofascial' }
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

}
