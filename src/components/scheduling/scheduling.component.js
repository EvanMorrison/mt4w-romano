module.exports = function(ngModule) {
  ngModule
    .component('scheduling', {
      template: require('./scheduling.template.html'),
      controller: [   
                      '$scope',
                      'DataServ',
                      SchedulingController],
      controllerAs: 'vm'
    })

    function SchedulingController($scope, DataServ) {
      const vm = this;

      // picture to show in side div
      vm.sideimage = DataServ.sideImages.scheduling;

      // allow user to send an email directly from the built in webform
      vm.submitEmail = function(e) {
          e.preventDefault();
          vm.wasEmailSent = false;
          const msg = {}
          msg.subject = vm.subject;
          msg.replyAddress = vm.replyAddress;
          msg.body = vm.messageBody;
          console.log('messageBody ', msg.body);
          const url = "https://script.google.com/macros/s/AKfycbzlCGQJNJQ1zXPWvOeMY9p-DqyX0ZigsEzs4x0nV5ygjFvqnLB9/exec"
          
          // using Google Apps Script sendEmail to send the form data as an email. 
          // trying $resource did not work, resulting in a cross-origin error. So this is using
          // the plain vanilla XHR
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                console.log( xhr.status )
                console.log(xhr.responseText);
                if (xhr.status == 200) $scope.$apply(vm.wasEmailSent= true) ;
                return;
            };
            // url encode form data for sending as post data
            var encoded = Object.keys(msg).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(msg[k])
            }).join('&')
                    xhr.send(encoded);
                  

      }

    }

}
