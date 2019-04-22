const moment = require('moment')

class DateTimeUtil {

    constructor() {

    }

    today() {
        return moment().calendar()
    }

    setYear(year) {
        return moment().add(year, 'year').calendar()
    }

    daysDifference(dateLeft, dateRight) {

    }
}

module.exports = DateTimeUtil;