const moment = require('moment');

class DateTimeUtil {

    constructor() {

    }

    today() {
        return new Date();
    }

    setYear(date, year) {
        return new Date(date.setYear(year));
    }

    daysDifference(dateLeft, dateRight) {
        return Math.round((dateRight.getTime() - dateLeft.getTime()) / (24 * 3600 * 1000));
    }

    dateMinusDays(minusDays) {
        return new Date(new Date().getTime() - (minusDays * 24 * 3600 * 1000));
    }

    formatDate(date, format) {
        return moment(date).format(format);
    }
}

module.exports = DateTimeUtil;