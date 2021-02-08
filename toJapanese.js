'use strict';
const factors = require('./lib/factors');
const one = require('./lib/one');

const arNums = Object.freeze({
    '0': '零',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九',
});

const multipliers = ['', '十', '百', '千'];
const blockSize = 4;

/**
 * Convert to Japanese numbers from Arabic numbers.
 * @param {String} num - natural arabic numbers
 * @return {String}
 */
module.exports = require('blocked-number-converter/fromArabic')(arNums, factors, blockSize, multipliers, one);
