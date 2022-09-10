'use strict';

/**
 * splash service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::splash.splash');
