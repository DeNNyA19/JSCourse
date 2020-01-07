const httpClient = require('../../framework/httpclient');
const { describe, it } = require('mocha');
const exRateApiHelper = require('../../pages/exchangerate/exrateapihelper');
const DateTimeUtil = require('../../utils/dateTime.util');

describe("ExchangeRate suite", async () => {
    it("Basic test", async () => {
        const dateTimeUtil = new DateTimeUtil();
        const text = await exRateApiHelper.getLatestRate('USD');
        const startDate = dateTimeUtil.dateMinusDays(10);
        const rate = await exRateApiHelper.getRateHistory(dateTimeUtil.formatDate(startDate, 'YYYY-MM-DD'), 
            dateTimeUtil.formatDate(new Date(), 'YYYY-MM-DD'), 'USD');
        console.log(rate);
    });
})  