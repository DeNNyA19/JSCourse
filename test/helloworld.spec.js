const { describe, it } = require('mocha');
const DateTimeUtil = require('../utils/dateTime.util');

describe('dateTime.util testSuite', () => {
    it ("today() should return today's date", () => {
        assert.equal(DateTimeUtil.today(), new Date().toLocaleDateString(), 'dateTimeUtil.today() returns incorrect date');
    });

    it ('setYear(year) should return date with changed year', () => {
        const initialYear = 2020;
        const yearToSet = 2022;
        const initialDate = new Date(`Aug 28, ${initialYear}`);
        const expectedDate = new Date(`Aug 28, ${yearToSet}`);
        assert.equal(DateTimeUtil.setYear(initialDate, yearToSet), expectedDate.toLocaleDateString(), 'dateTimeUtil.setYear() returns incorrect date');
    });

    it ('dateDifference(dateLeft, dateRight) should return timestamp difference', () => {
        const initialDay = 2;
        const dayToSet = 12;
        const initialDate = new Date(`Aug ${initialDay}, 2019`);
        const expectedDate = new Date(`Aug ${dayToSet}, 2019`);
        const expectedDifference = (dayToSet - initialDay) * 24 * 3600;
        assert.equal(DateTimeUtil.daysDifference(initialDate, expectedDate), expectedDifference, 'dateTimeUtil.setYear() returns incorrect amount of seconds');
    })
});