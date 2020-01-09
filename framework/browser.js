require('chromedriver');
const { Builder, Capabilities } = require('selenium-webdriver');
const config = require('../config.json');
const logger = require('../utils/log.util')

class Browser {

    constructor() {
        this.driver;
    }

    async start() {
        const capabilities = Capabilities.chrome();
        capabilities.set('chromeOptions', {
            'args': ['--disable-plugins']
        })
        this.driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
        try {
            await this.driver.get(config.startUrlGoogle);
            await this.driver.manage().setTimeouts({
                implicit: config.timeouts.implicit,
                pageLoad: config.timeouts.pageLoad,
                script: config.timeouts.scriptExecuting
            })
            logger.info(`Browser is started`);
        } catch (error) {
            logger.error(`Cannot start browser: ${error}`)
        }
    }

    async quit() {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(async () => {
                    await this.driver.quit();
                    resolve();
                }, 100)
            } catch (error) {
                logger.warning(`Errr during closing the browser: ${error}`);
                reject();
            }
        })
    }

    async findElement(by, name) {
        return this.driver.findElement(by).catch((error) => {
            logger.warning(`Cannot find element ${error}: ${name}`);
        });
    }

    async findElements(by, name) {
        return this.driver.findElements(by).catch((error) => {
            logger.warning(`Some problem occured during finding of elements ${error}: ${name}`);
        });
    }
}

module.exports = Browser;