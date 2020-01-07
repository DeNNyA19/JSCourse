const httpClient = require('../../framework/httpclient');

class ExRateApiHelper {
    
    async getLatestRate(base) {
        const text = await httpClient.executeGetRequest("https://api.exchangeratesapi.io/", `latest?base=${base}`);
        return text;
    }

    async getRateHistory(startAt, endAt, base) {
        const text = await httpClient.executeGetRequest("https://api.exchangeratesapi.io/", `history?start_at=${startAt}&end_at=${endAt}&base=${base}`)
        return text;
    }
}

module.exports = new ExRateApiHelper();