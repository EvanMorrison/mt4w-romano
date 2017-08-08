module.exports = function(app) {
  app
    .directive('googleMap', ['$timeout', '$q', function($timeout, $q) {
        return { 
          transclude: true,
          link: function(scope, element, attrs) {
            
            // add script tag to the DOM (if it isn't there already) to get the google maps api
            function addScript() {
                const mapurl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBYRJBr8_LNRSUzZUYSbxezDkMzA5d3qN8'
                const newScript = angular.element(document.createElement('script'));
                newScript.attr({'type': 'text/javascript','src': mapurl });
                if (!document.querySelector('script[src="' + mapurl + '"]')) {
                    angular.element(document.body).append(newScript);
                }
            }
            const elem = element[0];
            // google maps api initialization
          function initMap(office) {
            // const center = {lat: 33.580377, lng: -111.880618}

            const map = new google.maps.Map(elem, {
              zoom: 13,
              center: office,
              gestureHandling: 'cooperative',
              scrollwheel: false,
              fullscreenControl: false,
              mapTypeControl: true,
              mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_RIGHT
              }
            });
            const marker = new google.maps.Marker({
                  position: office,
                  map: map
                });
          }
          // convert street address into lat, lng coordinates
          function codeAddress(address) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {
              if (status == 'OK') {
                const addressLatLng = results[0].geometry.location;
                initMap(addressLatLng);
                return
              } else {
                console.log('Geocode was not successful for the following reason: ' + status);
                return {}
              }
            });
          }
          
          const address = '9458 East Ironwood Square Drive #102, Scottsdale, AZ 85258'
            if (window.google) {
              codeAddress(address);
            } else {
              addScript();
              $timeout(function(){codeAddress(address)},1000)
            }
        }
      }
    }])
}