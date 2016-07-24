/**
 * Main application routes
 */

'use strict';

import userRoutes from '../resources/user';
import changeRoutes from '../resources/change';

var mount = require('koa-mount');

module.exports = function(app) {
  app.use(mount('/', require('../resources/root')));
  app.use(mount('/user', userRoutes));
  app.use(mount('/change', changeRoutes));
};
