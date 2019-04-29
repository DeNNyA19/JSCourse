const moment = require('moment')

class DateTimeUtil {

    constructor() {

    }

    today() {
        return new Date().toLocaleDateString();
    }

    setYear(date, year) {
        return new Date(date.setYear(year)).toLocaleDateString();
    }

    daysDifference(dateLeft, dateRight) {
        return (dateRight.getTime() - dateLeft.getTime()) / 1000;
    }
}

module.exports = DateTimeUtil;