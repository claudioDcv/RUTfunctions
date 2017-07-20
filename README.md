# RUTfunctions

Functional helpers for handling RUT Chile written in `ES6` without dependencies

> Helpers funcionales para manipulación de RUT Chileno escritos en `ES6` sin dependencias

--------------------------------------------------------------------------------

## Install NPM

`npm install rutfunctions`

## Install YARN

`yarn add rutfunctions`

## Using:

- RUTclean

```
@param paramrut {string}= 16.761.256-9
@return {string} = 167512569
```

- RUTvalidate

```
@param paramrut {string} = 16.761.256-9
@return {boolean} = true
```

```javascript
// Example
RUTvalidate('167512569')
true
RUTvalidate('167512568')
false
RUTvalidate('16.751.256-8')
false
RUTvalidate('16.751.256-9')
true
```

- RUTformat

```
@param paramrut {number/string} = 167512569
@return {string} = 16.761.256-9
```

- RUTgetDv

```
@param paramrut {number/string} = 16751256 / 16.751.256
@return {string} = 9
```

- RUTnumber

```
@param paramrut {string} = 16.751.256-9 / 16751256-9
@return {string} = 16751256
```

- RUTDv

```
@param paramrut {string} = 16.751.256-9 / 16751256-9
@return {string} = 9
```

- RUTNumAppendDv

```
@param paramrut {string} = 16751256
@return {string} = 167512569
```
