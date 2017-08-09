module.exports = function(app) {
  require('./services.component')(app);
  require('./massage/massage.component')(app);
  require('./lymphatic/lymphatic.component')(app);
  require('./myofascial/myofascial.component')(app);
}