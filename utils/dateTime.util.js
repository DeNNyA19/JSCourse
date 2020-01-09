const moment = require('moment');

const MS_IN_DAY = 24 * 3600 * 1000;

class DateTimeUtil {

    constructor() {

    }

    static today() {
        return new Date();
    }

    static setYear(date, year) {
        return new Date(date.setYear(year));
    }

    static daysDifference(dateLeft, dateRight) {
        return Math.round((dateRight.getTime() - dateLeft.getTime()) / MS_IN_DAY);
    }

    static dateMinusDays(minusDays) {
        return new Date(new Date().getTime() - (minusDays * MS_IN_DAY));
    }

    static formatDate(date, format) {
        return moment(date).format(format);
    }
}

module.exports = DateTimeUtil;