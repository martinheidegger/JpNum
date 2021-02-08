'use strict';
const factors = require('./lib/factors');
const one = require('./lib/one');

const jpNums = Object.freeze({
    '零': '0',
    '〇': '0',
    '一': '1',
    '壱': '1',
    '二': '2',
    '弐': '2',
    '三': '3',
    '参': '3',
    '四': '4',
    '五': '5',
    '伍': '5',
    '六': '6',
    '七': '7',
    '八': '8',
    '九': '9',
});

const digits = Object.freeze([
    {j: '十', a: '10'},
    {j: '拾', a: '10'},
    {j: '百', a: '100'},
    {j: '千', a: '1000'},
]);

/**
 * Convert to Arabic numbers from Japanese numbers.
 * @param {String} japanese - natural japanese numbers
 * @return {String}
 */
module.exports = require('blocked-number-converter/toArabic')({
  digits: digits,
  jpNums: jpNums,
  factors: factors,
  one: one
});
