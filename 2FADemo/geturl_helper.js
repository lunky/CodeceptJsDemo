'use strict';
const Helper = require('codeceptjs').helper;
class GetUrl extends Helper {
    async getConfiguredHostUrl() {
        const helper = this.helpers['Puppeteer'];
        if(helper){
            return helper.config.url;
        }
    }
}

module.exports = GetUrl;