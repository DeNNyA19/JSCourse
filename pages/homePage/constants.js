const { By } = require('selenium-webdriver');

const locators = {
    form: By.id("hplogo"),
    searchInput: By.name('q')
}

module.exports = { locators }