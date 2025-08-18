import { describe, it, expect } from 'vitest';
import { sum, average, product, quotient, min, max } from '../src/arrayProcedure.js';

describe('arrayProcedure', () => {
	describe('sum', () => {
		it('should calculate sum of numbers', () => {
			expect(sum([1, 2, 3, 4, 5])).toBe(15);
			expect(sum([10, -5, 3])).toBe(8);
			expect(sum([0, 0, 0])).toBe(0);
		});

		it('should handle empty array', () => {
			expect(sum([])).toBe(0);
		});

		it('should handle single element', () => {
			expect(sum([42])).toBe(42);
		});

		it('should handle NaN values', () => {
			expect(sum([1, NaN, 3])).toBeNaN();
			expect(sum([1, NaN, 3], true)).toBe(4); // ignoreNaN = true
		});

		it('should handle undefined values', () => {
			const sparseArray = [1, , 3] as ArrayLike<number>; // sparse array with undefined
			expect(sum(sparseArray)).toBeNaN();
		});
	});

	describe('average', () => {
		it('should calculate average of numbers', () => {
			expect(average([1, 2, 3, 4, 5])).toBe(3);
			expect(average([10, 20])).toBe(15);
			expect(average([0, 0, 0])).toBe(0);
		});

		it('should handle empty array', () => {
			expect(average([])).toBeNaN();
		});

		it('should handle single element', () => {
			expect(average([42])).toBe(42);
		});

		it('should handle NaN values', () => {
			expect(average([1, NaN, 3])).toBeNaN();
			expect(average([2, NaN, 4], true)).toBe(3); // ignoreNaN = true
		});

		it('should handle undefined values', () => {
			const sparseArray = [2, , 4] as ArrayLike<number>; // sparse array with undefined
			expect(average(sparseArray)).toBeNaN();
		});
	});

	describe('product', () => {
		it('should calculate product of numbers', () => {
			expect(product([2, 3, 4])).toBe(24);
			expect(product([1, 5, 2])).toBe(10);
			expect(product([2, -3])).toBe(-6);
		});

		it('should handle empty array', () => {
			expect(product([])).toBeNaN();
		});

		it('should handle single element', () => {
			expect(product([7])).toBe(7); // product of single number is itself
		});

		it('should handle zeros', () => {
			expect(product([2, 0, 3])).toBe(0);
		});

		it('should handle NaN values', () => {
			expect(product([2, NaN, 3])).toBeNaN();
			expect(product([2, NaN, 3], true)).toBe(6); // ignoreNaN = true
		});

		it('should handle undefined values', () => {
			const sparseArray = [2, , 3] as ArrayLike<number>; // sparse array with undefined
			expect(product(sparseArray)).toBeNaN();
		});
	});

	describe('quotient', () => {
		it('should calculate quotient by dividing first by subsequent numbers', () => {
			expect(quotient([12, 2, 3])).toBe(2); // 12 / 2 / 3 = 2
			expect(quotient([100, 5, 2])).toBe(10); // 100 / 5 / 2 = 10
			expect(quotient([8, -2])).toBe(-4); // 8 / -2 = -4
		});

		it('should handle empty array', () => {
			expect(quotient([])).toBeNaN();
		});

		it('should handle single element', () => {
			expect(quotient([7])).toBeNaN(); // quotient requires at least 2 elements
		});

		it('should handle division by zero', () => {
			expect(quotient([10, 0])).toBeNaN();
			expect(quotient([12, 2, 0, 3])).toBeNaN();
		});

		it('should handle NaN values', () => {
			expect(quotient([12, NaN, 3])).toBeNaN();
			expect(quotient([12, NaN, 3], true)).toBe(4); // ignoreNaN = true, 12 / 3 = 4
		});

		it('should handle undefined values', () => {
			const sparseArray = [12, , 3] as ArrayLike<number>; // sparse array with undefined
			expect(quotient(sparseArray)).toBeNaN();
		});

		it('should handle undefined first element', () => {
			const sparseArray = [, 2, 3] as ArrayLike<number>; // sparse array with undefined first element
			expect(quotient(sparseArray)).toBeNaN();
		});
	});

	describe('min', () => {
		it('should find minimum value', () => {
			expect(min([1, 2, 3, 4, 5])).toBe(1);
			expect(min([10, -5, 3])).toBe(-5);
			expect(min([0, 0, 0])).toBe(0);
		});

		it('should handle empty array', () => {
			expect(min([])).toBeNaN();
		});

		it('should handle single element', () => {
			expect(min([42])).toBe(42);
		});

		it('should handle NaN values', () => {
			expect(min([1, NaN, 3])).toBeNaN();
			expect(min([5, NaN, 2], true)).toBe(2); // ignoreNaN = true
		});

		it('should handle undefined values', () => {
			const sparseArray = [5, , 2] as ArrayLike<number>; // sparse array with undefined
			expect(min(sparseArray)).toBeNaN();
		});
	});

	describe('max', () => {
		it('should find maximum value', () => {
			expect(max([1, 2, 3, 4, 5])).toBe(5);
			expect(max([10, -5, 3])).toBe(10);
			expect(max([0, 0, 0])).toBe(0);
		});

		it('should handle empty array', () => {
			expect(max([])).toBeNaN();
		});

		it('should handle single element', () => {
			expect(max([42])).toBe(42);
		});

		it('should handle NaN values', () => {
			expect(max([1, NaN, 3])).toBeNaN();
			expect(max([1, NaN, 5], true)).toBe(5); // ignoreNaN = true
		});

		it('should handle undefined values', () => {
			const sparseArray = [1, , 5] as ArrayLike<number>; // sparse array with undefined
			expect(max(sparseArray)).toBeNaN();
		});
	});
});