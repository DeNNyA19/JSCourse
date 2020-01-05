const logger = require('./log.util')

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        var actionResult = action();
        if (actionResult == expectedValue) {
            setTimeout(() => resolve(), interval);
        } else {
            setTimeout(() => reject(actionResult), interval);
        }
    })
}

class Wait {

    constructor() {
        this.count = 0;
    }

    forTrue(action, maxCount, interval) {
        return this.forCondition(action, true, maxCount, interval);
    }

    forFalse(action, maxCount, interval) {
        return this.forCondition(action, false, maxCount, interval);
    }

    forCondition(action, expectedCondition, maxCount, interval) {
        this.count++;
        logger.info(`[${this.count}] Wait for ${expectedCondition}`);
        return doWait(action, interval, expectedCondition).then(() => {
            logger.warning("Was able to reach expected condition");
            this.count = 0;
            return true;
        }, (actionResult) => {
            if (maxCount <= this.count) {
                logger.warning(`Was not able to reach expected condition. Action result is ${actionResult}`);
                this.count = 0;
                return false;
            } else {
                if (expectedCondition) {
                    return this.forTrue(action, maxCount, interval, this.count);
                } else {
                    return this.forFalse(action, maxCount, interval, this.count);
                }
            }
        })
    }
}

module.exports = Wait;