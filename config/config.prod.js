/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    const config = exports = {};
    config.cluster = {
        listen: {
            hostname: '0.0.0.0',
            port: 8080
        }
    };
    return {
        ...config,
    };
};
