(function() {

  angular.module("Navbar", [])
  .component('navbar', {
    templateUrl: '/components/navbar/navbar.template.html',
    controller: ['$scope', navbarController]
  });

  function navbarController($scope) {
    const ctrl = this;
    $scope.currentNavItem = 'about';
    function goto(name) {
      console.log('current nav item ', $scope.currentNavItem)
    }
  }

})()
