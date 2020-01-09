const BasePage = require('../../framework/basePage');
const locators = require('./constants');
const { getResultsCount } = require('../../utils/regexparser');
const { getLinksList } = require('./helpers');

class ResultPage extends BasePage {

    constructor(browser) {
        super(browser, locators.form, "Result");
    }

    async getResultCount() {
        const resultsElement = await this.browser.findElement(locators.resultCount, 'results');
        return getResultsCount(await resultsElement.getText()).trim().replace(/ /g, '');
    }

    async isLinkPresent(link) {
        const links = await getLinksList(this.browser);
        return links.includes(link);
    }
}

module.exports = ResultPage;