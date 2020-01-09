class BasePage {

    constructor(browser, locator, name) {
        this.browser = browser;
        this.locator = locator;
        this.name = name;
    }

    async isOpened() {
        return (await this.browser.findElements(this.locator, `${this.name} form`)).length > 0;
    }
}

module.exports = BasePage;