/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import { sequelize } from './db';

// Bootstrap server
var app = require('koa')();
var bodyParser = require('koa-body-parser')();
var cors = require('koa-cors');

app.use(cors({ origin: '*' }));
app.use(bodyParser);

require('./config/koa')(app);
require('./config/routes')(app);
var config = require('./config/environment');

// Start server
if (!module.parent) {
	app.listen(config.port, config.ip, function () {
  	console.log('Koa server listening on %d, in %s mode', config.port, config.env);
	});
}

// Expose app
exports = module.exports = app;
