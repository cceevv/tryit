<div align="center">
<h1>tryit <sub><sub><sup>[no try catch]</sup></sub></sub></h1>

简单的同步或异步错误处理包装器，让 `try catch` 见鬼去吧。

[![npm](https://img.shields.io/npm/v/@cceevv/tryit?style=flat-square)](https://www.npmjs.com/package/@cceevv/tryit)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cceevv/tryit/test.yml?branch=master&style=flat-square&label=CI&logo=github)](https://github.com/cceevv/tryit/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/cceevv/tryit/badge.svg?branch=master)](https://coveralls.io/github/cceevv/tryit?branch=master)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@cceevv/tryit?style=flat-square)](https://bundlephobia.com/result?p=@cceevv/tryit)
[![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)](https://github.com/cceevv/tryit/blob/master/dist/tryit.d.ts)
[![GitHub](https://img.shields.io/github/license/cceevv/tryit?style=flat-square)](https://github.com/cceevv/tryit/blob/master/LICENSE)

[English](./README.md) · 简体中文

</div>

---

## 安装

```sh
pnpm add @cceevv/tryit
# or
yarn add @cceevv/tryit
# or
npm i @cceevv/tryit
```

## 使用

```ts
import tryit from "@cceevv/tryit";

function syncDemo() {
  const DefaultValue = {a: 0, b: ''}
  const [data = DefaultValue, err] = tryit(() => {
    return JSON.parse('--------{"a":1234, "b":"bbb"}')
  })
  if (err) {
    console.log('xxxxxxxxxx', err)
    return;
  }
  console.log('handle data...', data)
}

async function asyncDemo() {
  const promise = new Promise((resolve, reject) => {
    resolve('resolve data');
    // reject('reject error');
  })

  const [data, err] = await tryit(promise);
  if (err) {
    console.log('xxxxxxxxxx', err)
    return;
  }
  console.log('handle data...', data)
}
```

## 接口

```ts
export declare function tryit<T, U = Error>(func: (() => T)): [T, U];
export declare function tryit<T, U = Error>(promise: Promise<T>): Promise<[T, U]>;
```

## License

[MIT License](https://github.com/cceevv/tryit/blob/master/LICENSE) (c)
[cceevv](https://github.com/cceevv)
