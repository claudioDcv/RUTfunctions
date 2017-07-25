import _Object$keys from 'babel-runtime/core-js/object/keys';

/* create by claudio.dcv@gmail.com */

/* 2017 */

/*
* @param paramrut {string}= 16.761.256-9
* @return {string} = 167512569
*/
var rutClean = function rutClean(paramrut) {
  return ('' + paramrut).toString().replace(/[^0-9kK]+/g, '').toUpperCase();
};

/*
* @param paramrut {number/string} = 16751256 / 16.751.256
* @return {string} = 9
*/
var rutCalcDv = function rutCalcDv(paramrut) {
  var rut = rutClean(('' + paramrut).toString());
  var reverseRut = ('' + rut).split('').reverse().join('');
  var result = 0;
  var n = 1;

  _Object$keys(reverseRut).forEach(function (i) {
    n += 1;
    result += parseInt(reverseRut[i], 10) * n;
    n = n === 7 ? 1 : n;
  });

  result = 11 - result % 11;
  result = result === 11 ? 0 : result;
  return result === 10 ? 'K' : '' + result;
};

/*
* @example =
RUTvalidate('167512569') -> true
RUTvalidate('167512568') -> false
RUTvalidate('16.751.256-8') -> false
RUTvalidate('16.751.256-9') -> true
* @param paramrut {string} = 16.761.256-9
* @return {boolean} = true
*/
var rutValidate = function rutValidate(paramrut) {
  var rut = paramrut.toString();
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false;
  }
  rut = rutClean(rut);

  var dv = rut.slice(-1);
  var rutNumber = parseInt(rut.slice(0, -1), 10);
  return rutCalcDv(rutNumber) === dv;
};

/*
* @param paramrut {number/string} = 167512569
* @return {string} = 16.761.256-9
*/
var rutFormat = function rutFormat(paramrut) {
  var rut = rutClean(paramrut);

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1);

  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result;
  }

  return result;
};

/*
* @param paramrut {string} = 16.751.256-9 / 16751256-9
* @return {string} = 16751256
*/
var rutGetNumber = function rutGetNumber(paramrut) {
  return rutClean(('' + paramrut).split('-')[0]);
};

/*
* @param paramrut {string} = 16.751.256-9 / 16751256-9
* @return {string} = 9
*/
var rutGetDv = function rutGetDv(paramrut) {
  return rutClean(('' + paramrut).split('-')[1]);
};

/*
* @param paramrut {string} = 16751256
* @return {string} = 167512569
*/
var rutAddDv = function rutAddDv(paramrut) {
  return '' + paramrut + rutCalcDv(paramrut);
};

/*
test
let test1 = rutClean('16.752.156-9');
let test2 = rutCalcDv('16751256');
let test3 = rutValidate('16.751.256-9');
let test4 = rutValidate('16.751.256-8');
let test5 = rutFormat('167512569');
let test6 = rutGetNumber('16751256');
let test7 = rutGetDv('16.751.256-9');
let test8 = rutAddDv('16751256');
console.log(test1, test2, test3, test4, test5, test6, test7, test8);
result:
167521569 9 true false 16.751.256-9 16751256 9 16.751.2569 167512569
*/

/* Deprecated */

var RUTnumber = function RUTnumber(paramrut) {
  console.warn('this function is deprecated, ussing `rutGetNumber`');
  return rutGetNumber(paramrut);
};
var RUTvalidate = function RUTvalidate(paramrut) {
  console.warn('this function is deprecated, ussing `rutValidate`');
  return rutValidate(paramrut);
};
var RUTclean = function RUTclean(paramrut) {
  console.warn('this function is deprecated, ussing `rutClean`');
  return rutClean(paramrut);
};
var RUTformat = function RUTformat(paramrut) {
  console.warn('this function is deprecated, ussing `rutFormat`');
  return rutFormat(paramrut);
};
var RUTDv = function RUTDv(paramrut) {
  console.warn('this function is deprecated, ussing `rutCalcDv`');
  return rutCalcDv(paramrut);
};
var RUTgetDv = function RUTgetDv(paramrut) {
  console.warn('this function is deprecated, ussing `rutGetDv`');
  return rutGetDv(paramrut);
};
var RUTNumAppendDv = function RUTNumAppendDv(paramrut) {
  console.warn('this function is deprecated, ussing `rutAddDv`');
  return rutAddDv(paramrut);
};

var testDeprecated = function testDeprecated(paramrut) {
  RUTnumber(paramrut);
  RUTvalidate(paramrut);
  RUTclean(paramrut);
  RUTDv(paramrut);
  RUTgetDv(paramrut);
  return RUTformat(RUTNumAppendDv(paramrut));
};

export { rutClean, rutCalcDv, rutValidate, rutFormat, rutGetNumber, rutGetDv, rutAddDv, RUTnumber, RUTvalidate, RUTclean, RUTformat, RUTDv, RUTgetDv, RUTNumAppendDv, testDeprecated };
//# sourceMappingURL=index.es.js.map
