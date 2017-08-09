
module.exports = function(app) {
  app
  .directive('scrollWatch', ['$window', '$timeout', function($window, $timeout) {
      return function(scope, element, attrs) {
          const elem = element[0];
          let scrollwait = false;
          let lastScroll = null;
          angular.element($window).on("scroll", function(e) {
              if (!scrollwait) {
                scrollwait = true;
                handleScrolling();
                $timeout(function() {
                  scrollwait = false;
                  handleScrolling();
                }, 250);
              }
            })

        // toggle a class on the navbar when scrolling
        function handleScrolling() {
          let sd = $window.scrollY - lastScroll;
          if (sd > 0 && $window.scrollY >= 1) {
            angular.element(elem).addClass('nav-shrink')
          }
          if ($window.scrollY > 700) {
            if (sd > 5) {
              angular.element(elem).addClass('nav-hide')
            }  
          }
          if (sd < -5 ) {
                angular.element(elem).removeClass('nav-hide');
          }
          if (sd < 0 && $window.scrollY < 128) {
            angular.element(elem).removeClass('nav-shrink');
            angular.element(elem).removeClass('nav-hide');
          }  
          lastScroll = lastScroll + sd;
        }
        
        }
      
  }])
}