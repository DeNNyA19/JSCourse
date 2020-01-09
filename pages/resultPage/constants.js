const { By } = require('selenium-webdriver')

const locators = {
    form: By.id('search'),
    resultCount: By.id('resultStats'),
    resultLinks: By.xpath('//*[@id="search"]//h3/parent::a')
}

module.exports = locators;