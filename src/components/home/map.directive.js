module.exports = function(app) {
  app
    .directive('googleMap', ['$timeout', '$q', function($timeout, $q) {
        return function(scope, element, attrs) {
            
            const elem = element[0];
            // address to show on the map
            const address = '9458 East Ironwood Square Drive #102, Scottsdale, AZ 85258'
           
          // add script tag to the DOM (if it isn't there already) to get the google maps api
            function addScript() {
                const mapurl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBYRJBr8_LNRSUzZUYSbxezDkMzA5d3qN8'
                const newScript = angular.element(document.createElement('script'));
                newScript.attr({'type': 'text/javascript','src': mapurl });
                if (!document.querySelector('script[src="' + mapurl + '"]')) {
                    angular.element(document.body).append(newScript);
                }
            }
          
          // convert street address into lat, lng coordinates
          function codeAddress(address) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {
              if (status == 'OK') {
                const addressLatLng = results[0].geometry.location;
                // initialize the map, sending in the lat/lng for the office address
                initMap(addressLatLng);
                return
              } else {
                console.log('Geocode was not successful for the following reason: ' + status);
                return {}
              }
            });
          }

          // google maps api initialization
          function initMap(office) {
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
            const infoWindow = new google.maps.InfoWindow({
                  content: require('./mapInfo.template.html')
            })
            // info window starts open
            infoWindow.open(map, marker);
            // reopen info window (if closed) on clicking the marker
            marker.addListener('click', function() {
              infoWindow.open(map, marker);
            })
          }
          
          
          
          // ensure google api has loaded before running initialization  
          if (window.google) {
              // start by getting lat/lng corrdinates for office address
              codeAddress(address);
            } else {
              // load the google api if it is not already
              addScript();
              // give it time to load, then start the initialization
              $timeout(function(){codeAddress(address)},1000)
            }
        }
    }])
}