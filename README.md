# RUTfunctions

[![Build Status](https://travis-ci.org/claudioDcv/RUTfunctions.svg?branch=master)](https://travis-ci.org/claudioDcv/RUTfunctions) [![codecov](https://codecov.io/gh/claudioDcv/RUTfunctions/branch/master/graph/badge.svg)](https://codecov.io/gh/claudioDcv/RUTfunctions) [![npm](https://img.shields.io/npm/v/rutfunctions.svg)](https://www.npmjs.com/package/rutfunctions) [![npm](https://img.shields.io/npm/l/rutfunctions.svg)](https://www.npmjs.com/package/rutfunctions) [![npm](https://img.shields.io/npm/dm/rutfunctions.svg)](https://www.npmjs.com/package/rutfunctions)



Functional helpers for handling RUT Chile written in `ES6` without dependencies

> Helpers funcionales para manipulación de RUT Chileno escritos en `ES6` sin dependencias

--------------------------------------------------------------------------------

## Install NPM

`npm install rutfunctions`

## Install YARN

`yarn add rutfunctions`

## How to Test

Run one, or a combination of the following commands to lint and test your code:

- npm run lint -- lint the source code with ESLint
- npm test -- run unit tests with Mocha
- npm run test:watch -- run unit tests with Mocha, and watch files for changes
- npm run test:cover -- run unit tests with code coverage by Istanbul

## Base in <https://github.com/kriasoft/babel-starter-kit>


## Import

```javascript
import { rutClean, rutValidate } from 'rutfunctions'
```

## Using:

- rutClean

```
@param paramrut {string}= 16.761.256-9
@return {string} = 167512569
```

- rutValidate

```
@param paramrut {string} = 16.761.256-9
@return {boolean} = true
```

```javascript
// Example
rutValidate('167512569')
true
rutValidate('167512568')
false
rutValidate('16.751.256-8')
false
rutValidate('16.751.256-9')
true
```

- rutFormat

```
@param paramrut {number/string} = 167512569
@return {string} = 16.761.256-9
```

- rutGetDv

```
@param paramrut {number/string} = 16751256 / 16.751.256
@return {string} = 9
```

- rutGetNumber

```
@param paramrut {string} = 16.751.256-9 / 16751256-9
@return {string} = 16751256
```

- rutCalcDv

```
@param paramrut {string} = 16.751.256-9 / 16751256-9
@return {string} = 9
```

- rutAddDv

```
@param paramrut {string} = 16751256
@return {string} = 167512569
```

## Use the functional composition

```javascript

const rutNumber = '16751256';
const rutFormat = rutFormat(rutAddDv(rutNumber));
console.log(rutFormat);
// generate => 16.751.256-9
```



