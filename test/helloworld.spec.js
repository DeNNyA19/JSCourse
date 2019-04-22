const { describe, it } = require('mocha')
const { assert } = require('chai')
const moment = require('moment')
const logger = require('../utils/log.util')
const DateTimeUtil = require('../utils/dateTime.util')

describe('Hello World testSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    })
});

describe('dateTime.util testSuite', () => {
    const dateTimeUtil = new DateTimeUtil();
    
    it ("today() should return today's date", () => {
        assert.equal(dateTimeUtil.today(), moment().calendar());
    });

    it ('setYear(year) should return date with year equal "year"', () => {
        const year = 2;
        assert.equal(dateTimeUtil.setYear(2), moment().add(year, 'year').calendar());
    })
});