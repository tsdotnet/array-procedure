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
export function sum (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	if(!source || !source.length) return 0;

	let result = 0;
	if(ignoreNaN)
	{
		for(const n of source as number[])
		{
			if(!isNaN(n)) result += n;
		}
	}
	else
	{
		for(const n of source as number[])
		{
			if(isNaN(n)) return NaN;
			result += n;
		}
	}

	return result;
}

/**
 * Returns the average of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export function average (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	if(!source || !source.length) return NaN;

	let result = 0,
		count: number;
	if(ignoreNaN)
	{
		count = 0;
		for(const n of source as number[])
		{
			if(!isNaN(n))
			{
				result += n;
				count++;
			}
		}
	}
	else
	{
		count = source.length;
		for(const n of source as number[])
		{
			if(isNaN(n)) return NaN;
			result += n;
		}
	}

	return !count || isNaN(result) ? NaN : result/count;
}

/**
 * Returns the product (multiplication) of the values contained.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export function product (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	if(!source || !source.length) return NaN;

	let result = 1;
	if(ignoreNaN)
	{
		let found = false;
		for(const n of source as number[])
		{
			if(!isNaN(n))
			{
				result *= n;
				found = true;
			}
		}
		if(!found) return NaN;
	}
	else
	{
		for(const n of source as number[])
		{
			if(isNaN(n)) return NaN;
			result *= n;
		}
	}

	return result;
}

/**
 * Takes the first number and divides it by all following.
 * @param source
 * @param ignoreNaN Will cause this skip any NaN values.
 * @returns {number}
 */
export function quotient (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	const len = source ? source.length : 0;
	if(len<2) return NaN;

	let result = source[0];

	let found = false;
	for(let i = 1; i<len; i++)
	{
		const n = source[i];
		if(n===0)
		{
			return NaN;
		}
		if(isNaN(n))
		{
			if(!ignoreNaN)
			{
				return NaN;
			}
		}
		else
		{
			result /= n;
			if(!found) found = true;
		}
	}

	return found ? result : NaN;
}

function ifSet (
	source: ArrayLike<number>,
	start: number,
	ignoreNaN: boolean,
	predicate: (n: number, result: number) => boolean
): number
{
	if(!source || !source.length) return NaN;

	let result = start;
	if(ignoreNaN)
	{
		let found = false;
		for(const n of source as number[])
		{
			if(!isNaN(n))
			{
				if(predicate(n, result)) result = n;
				if(!found) found = true;
			}
		}
		if(!found) return NaN;
	}
	else
	{
		for(const n of source as number[])
		{
			if(isNaN(n)) return NaN;

			if(predicate(n, result)) result = n;
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
export function min (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	return ifSet(source, +Infinity, ignoreNaN, (n, result) => n<result);
}

/**
 * Returns the least positive number in the array.
 * @param {ArrayLike<number>} source
 * @param {boolean} ignoreNaN
 * @returns {number}
 */
export function max (source: ArrayLike<number>, ignoreNaN: boolean = false): number
{
	return ifSet(source, -Infinity, ignoreNaN, (n, result) => n>result);
}
