//var config      = require('./db/config');
var config      = require('./knexfile.js');
var env         = process.env.NODE_ENV || 'development';
var knex        = require('knex')(config[env]);

module.exports = knex;

// knex.migrate.latest([config]); // this doesn't do anything? need to run manually?
