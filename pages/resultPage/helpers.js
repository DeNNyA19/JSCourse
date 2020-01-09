const locators = require('./constants');

const getLinksList = async (browser) => {
    let linkElements = await browser.findElements(locators.resultLinks, 'result links');
    return linkElements.map(async (link) => await link.getAttribute('href'));
}

module.exports = { getLinksList }