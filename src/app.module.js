import './style.scss';
import './animate.scss';

const app = angular.module('MTWApp', [
                                        'ngMaterial',
                                        'ngMessages',
                                        'ngResource',
                                        'ui.router'
                                      ]);

require('./services/DataServ.service')(app);

require('./app.config')(app);
  
require('./components/home')(app);

require('./components/navbar')(app);

require('./components/about/about.component')(app);

require('./components/therapyservices')(app);

require('./components/scheduling/scheduling.component')(app);
