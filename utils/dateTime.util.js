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
}

module.exports = DateTimeUtil;