var Client = require('./radar_client'),
    instance = new Client();

instance._log = require('minilog');

// This module makes radar_client a singleton to prevent multiple connections etc.

module.exports = instance;
