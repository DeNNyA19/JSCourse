const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Google Search', () => {
    let browser;

    before(async () => {
        browser = new Browser();
        await browser.start();
        homePage = new HomePage(browser);
        resultPage = new ResultPage(browser);
    })

    after(async () => {
        await browser.quit();
    })

    const searchFor = 'webdriver';
    it(`should search for "${searchFor}"`, async () => {
        assert.isTrue(await homePage.isOpened(), 'Home page is opened');

        await homePage.search(searchFor);
        assert.isTrue(await resultPage.isOpened(), 'Result page is opened');
    })

    const moreThanResults = 100000;
    it(`should find more than ${moreThanResults} results`, async () => {
        let resultCount = (await resultPage.getResultCount());
        assert.isAbove(parseInt(resultCount), moreThanResults, `Result page has more than ${moreThanResults} results`);
    })

    const link = 'https://www.seleniumhq.org/projects/webdriver/';
    it(`should show "${link}" link on the first page`, async () => {
        assert.isTrue(await resultPage.isLinkPresent(link), `Link ${link} is present`);
    })
})