/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns the sum of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export declare function sum(source: ArrayLike<number>, ignoreNaN?: boolean): number;
/**
 * Returns the average of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export declare function average(source: ArrayLike<number>, ignoreNaN?: boolean): number;
/**
 * Returns the product (multiplication) of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export declare function product(source: ArrayLike<number>, ignoreNaN?: boolean): number;
/**
 * Takes the first number and divides it by all following.
 * @param source
 * @param ignoreNaN Will cause this skip any NaN values.
 * @returns {number}
 */
export declare function quotient(source: ArrayLike<number>, ignoreNaN?: boolean): number;
/**
 * Returns the most positive number in the array.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export declare function min(source: ArrayLike<number>, ignoreNaN?: boolean): number;
/**
 * Returns the least positive number in the array.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export declare function max(source: ArrayLike<number>, ignoreNaN?: boolean): number;
