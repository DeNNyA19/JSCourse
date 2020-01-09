const logger = require('./log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        var actionResult = action();
        if (actionResult == expectedValue) {
            setTimeout(() => resolve(), interval);
        } else {
            setTimeout(() => reject(actionResult), interval);
        }
    });
};

const retrierAwait = async (action, expectedCondition, maxCount, interval, count) => {
    count++;
    logger.info(`[${count}] Wait for ${expectedCondition}`);
    try {
        await doWait(action, interval, expectedCondition);
        logger.warning("Was able to reach expected condition");
        return true;
    } catch(actionResult) {
        if (maxCount <= count) {
            logger.warning(`Was not able to reach expected condition. Action result is ${actionResult}`);
            return false;
        } else {
            return retrierAwait(action, expectedCondition, maxCount, interval, count);
        }
    }
};

class Wait {

    forTrue(action, maxCount, interval) {
        return retrierAwait(action, true, maxCount, interval, 0);
    }

    forFalse(action, maxCount, interval) {
        return retrierAwait(action, false, maxCount, interval, 0);
    }
}

module.exports = Wait;