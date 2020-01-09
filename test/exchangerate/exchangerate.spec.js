const httpClient = require('../../framework/httpclient');
const { describe, it } = require('mocha');
const exRateApiHelper = require('../../pages/exchangerate/index');
const { dateFormat } = require('../../pages/exchangerate/constants')
const DateTimeUtil = require('../../utils/dateTime.util');
const logger = require('../../utils/log.util');

const verifyRateGrowth = (rateMap, testCurrency) => {
    let rateGrowth = [];
    let prevRate = rateMap.values().next().value[testCurrency];
    for (const [date, rates] of rateMap.entries()) {
        let currentRate = rates[testCurrency];
        if (prevRate != currentRate) {
            if (prevRate < currentRate) {
                rateGrowth.push(`+ ${currentRate}`);
            } else {
                rateGrowth.push(`- ${currentRate}`);
            }
            prevRate = currentRate;
        } else {
            rateGrowth.push(currentRate);
        }
    }
    logger.info(`I want to see if rate on my currency is growing compare to 10 days before today: ${rateGrowth}`);
}

describe("ExchangeRate suite", async () => {
    it("Basic test", async () => {
        const baseCurrency = 'USD';
        const testCurrency = 'RUB';
        const startDate = DateTimeUtil.formatDate(DateTimeUtil.dateMinusDays(10), dateFormat);
        const endDate = DateTimeUtil.formatDate(DateTimeUtil.today(), dateFormat)
        const rateJson = JSON.parse(await exRateApiHelper.getRateHistory(startDate, endDate, baseCurrency));
        const rateMap = new Map(Object.entries(rateJson.rates));
        verifyRateGrowth(rateMap, testCurrency);
    });
})  