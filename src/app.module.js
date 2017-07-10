import './style.css';
import './animate.css';

const app = angular.module('MTWApp', [
                                        'ngMaterial',
                                        'ui.router'
                                      ]);

require('./app.config')(app);
  
require('./components/home/home.component')(app);

require('./components/navbar')(app);

require('./components/about/about.component')(app);

require('./components/services/services.component')(app);

require('./components/scheduling/scheduling.component')(app);
