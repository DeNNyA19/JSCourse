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

function forCondition(action, expectedCondition, maxCount, interval, count) {
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
            return forCondition(action, expectedCondition, maxCount, interval, count);
        }
    })
}

class Wait {

    forTrue(action, maxCount, interval) {
        return forCondition(action, true, maxCount, interval, 0);
    }

    forFalse(action, maxCount, interval) {
        return forCondition(action, false, maxCount, interval, 0);
    }
}

module.exports = Wait;