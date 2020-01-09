const httpClient = require('../../framework/httpclient');
const { methods } = require('./constants');
const config = require('../../config');

class ExRateApiHelper {
    
    async getLatestRate(base) {
        const text = await httpClient.executeGetRequest(config.url, methods.latestRate(base));
        return text;
    }

    async getRateHistory(startAt, endAt, base) {
        const text = await httpClient.executeGetRequest(config.url, methods.historyRate(startAt, endAt, base))
        return text;
    }
}

module.exports = new ExRateApiHelper();