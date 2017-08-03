module.exports = function(ngModule) {
  require('./navbar.component')(ngModule);
  require('./navLinks.component')(ngModule);
  require('./scrollWatch.directive')(ngModule);
}