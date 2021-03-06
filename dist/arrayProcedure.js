"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = exports.min = exports.quotient = exports.product = exports.average = exports.sum = void 0;
/**
 * Returns the sum of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
function sum(source, ignoreNaN = false) {
    if (!source || !source.length)
        return 0;
    let result = 0;
    if (ignoreNaN) {
        for (const n of source) {
            if (!isNaN(n))
                result += n;
        }
    }
    else {
        for (const n of source) {
            if (isNaN(n))
                return NaN;
            result += n;
        }
    }
    return result;
}
exports.sum = sum;
/**
 * Returns the average of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
function average(source, ignoreNaN = false) {
    if (!source || !source.length)
        return NaN;
    let result = 0, count;
    if (ignoreNaN) {
        count = 0;
        for (const n of source) {
            if (!isNaN(n)) {
                result += n;
                count++;
            }
        }
    }
    else {
        count = source.length;
        for (const n of source) {
            if (isNaN(n))
                return NaN;
            result += n;
        }
    }
    return !count || isNaN(result) ? NaN : result / count;
}
exports.average = average;
/**
 * Returns the product (multiplication) of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
function product(source, ignoreNaN = false) {
    if (!source || !source.length)
        return NaN;
    let result = 1;
    if (ignoreNaN) {
        let found = false;
        for (const n of source) {
            if (!isNaN(n)) {
                result *= n;
                found = true;
            }
        }
        if (!found)
            return NaN;
    }
    else {
        for (const n of source) {
            if (isNaN(n))
                return NaN;
            result *= n;
        }
    }
    return result;
}
exports.product = product;
/**
 * Takes the first number and divides it by all following.
 * @param source
 * @param ignoreNaN Will cause this skip any NaN values.
 * @returns {number}
 */
function quotient(source, ignoreNaN = false) {
    const len = source ? source.length : 0;
    if (len < 2)
        return NaN;
    let result = source[0];
    let found = false;
    for (let i = 1; i < len; i++) {
        const n = source[i];
        if (n === 0) {
            return NaN;
        }
        if (isNaN(n)) {
            if (!ignoreNaN) {
                return NaN;
            }
        }
        else {
            result /= n;
            if (!found)
                found = true;
        }
    }
    return found ? result : NaN;
}
exports.quotient = quotient;
function ifSet(source, start, ignoreNaN, predicate) {
    if (!source || !source.length)
        return NaN;
    let result = start;
    if (ignoreNaN) {
        let found = false;
        for (const n of source) {
            if (!isNaN(n)) {
                if (predicate(n, result))
                    result = n;
                if (!found)
                    found = true;
            }
        }
        if (!found)
            return NaN;
    }
    else {
        for (const n of source) {
            if (isNaN(n))
                return NaN;
            if (predicate(n, result))
                result = n;
        }
    }
    return result;
}
/**
 * Returns the most positive number in the array.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
function min(source, ignoreNaN = false) {
    return ifSet(source, +Infinity, ignoreNaN, (n, result) => n < result);
}
exports.min = min;
/**
 * Returns the least positive number in the array.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
function max(source, ignoreNaN = false) {
    return ifSet(source, -Infinity, ignoreNaN, (n, result) => n > result);
}
exports.max = max;
//# sourceMappingURL=arrayProcedure.js.map