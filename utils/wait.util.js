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

    forTrue(action, maxCount, interval, count = 0) {
        return this.forCondition(action, true, maxCount, interval, count);
    }

    forFalse(action, maxCount, interval, count = 0) {
        return this.forCondition(action, false, maxCount, interval, count);
    }

    forCondition(action, expectedCondition, maxCount, interval, count = 0) {
        count++;
        logger.info(`[${count}] Wait for ${expectedCondition}`);
        return doWait(action, interval, expectedCondition).then(() => {
            logger.warning("Was able to reach expected condition");
            return true;
        }, (actionResult) => {
            if (maxCount <= count) {
                logger.warning(`Was not able to reach expected condition. Action result is ${actionResult}`);
                return false;
            } else {
                if (expectedCondition) {
                    return this.forTrue(action, maxCount, interval, count);
                } else {
                    return this.forFalse(action, maxCount, interval, count);
                }
            }
        })
    }
}

module.exports = Wait;