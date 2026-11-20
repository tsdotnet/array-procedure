![@tsdotnet/array-procedure: Math over number arrays. Sum, average, min, max and more.](https://cdn.jsdelivr.net/gh/tsdotnet/array-procedure@master/assets/banner.svg)

[![npm version](https://img.shields.io/npm/v/@tsdotnet/array-procedure.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/array-procedure)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/array-procedure/blob/master/LICENSE)

Numeric reductions over arrays: `sum`, `average`, `product`, `quotient`, `min` and `max`.

## Install

```sh
npm install @tsdotnet/array-procedure
```

## Usage

```ts
import { sum, average, min, max } from '@tsdotnet/array-procedure';

const prices = [4, 8, NaN, 6];

sum(prices);          // NaN
sum(prices, true);    // 18: NaN ignored
average(prices, true); // 6
min(prices, true);    // 4
max(prices, true);    // 8
```

Also `product` and `quotient`. An empty array gives `0` for `sum` and `NaN` for the rest.

## Use it from

ESM (`import { sum, average, min, max } from '@tsdotnet/array-procedure';`) or CommonJS (`const { sum, average, min, max } = require('@tsdotnet/array-procedure');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-procedure@1/dist/umd/array-procedure.min.js"></script>
<script>
  const { sum, average, min, max } = tsdotnet.arrayProcedure;
</script>
```

</details>

## Docs

[tsdotnet.github.io/array-procedure](https://tsdotnet.github.io/array-procedure/)
