const LightningCloudProvider = require('./LightningCloudProvider');

module.exports = class LightningDevCloudProvider extends LightningCloudProvider{
    constructor(){
        super();
        this.useCache = false;
    }
};