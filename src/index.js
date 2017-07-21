/* eslint no-plusplus: 0 */
/* create by claudio.dcv@gmail.com */

/*
* @param paramrut {string}= 16.761.256-9
* @return {string} = 167512569
*/
const RUTclean = (paramrut) => {
  const rut = paramrut.toString();
  return rut.replace(/[^0-9kK]+/g, '').toUpperCase();
};
/*
* @example =
RUTvalidate('167512569')
true
RUTvalidate('167512568')
false
RUTvalidate('16.751.256-8')
false
RUTvalidate('16.751.256-9')
true

* @param paramrut {string} = 16.761.256-9
* @return {boolean} = true

*/
const RUTvalidate = (paramrut) => {
  let rut = paramrut.toString();
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false;
  }
  rut = RUTclean(rut);
  let t = parseInt(rut.slice(0, -1), 10);
  let m = 0;
  let s = 1;

  while (t > 0) {
    s = (s + ((t % 10) * (9 - (m++ % 6)))) % 11;
    t = Math.floor(t / 10);
  }

  const v = (s > 0) ? `${s - 1}` : 'K';
  return (v === rut.slice(-1));
};

/*
* @param paramrut {number/string} = 167512569
* @return {string} = 16.761.256-9
*/
const RUTformat = (paramrut) => {
  const rut = RUTclean(`${paramrut}`);

  let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
  for (let i = 4; i < rut.length; i += 3) {
    result = `${rut.slice(-3 - i, -i)}.${result}`;
  }
  return result;
};

/*
* @param paramrut {number/string} = 16751256 / 16.751.256
* @return {string} = 9
*/
const RUTgetDv = (paramrut) => {
  const cleanRUT = RUTclean(paramrut);
  const newNum = cleanRUT.toString().split('').reverse().join('');
  let j = 2;
  let suma = 0;
  for (let i = 0; i < newNum.length; i += 1, j === 7 ? j = 2 : j += 1) {
    suma += parseInt(newNum.charAt(i), 10) * j;
  }
  const nDv = 11 - (suma % 11);
  const nDvK = (nDv === 10) ? 'K' : nDv;
  const result = ((nDv === 11) ? 0 : nDvK);
  return result.toString();
};

/*
* @param paramrut {string} = 16.751.256-9 / 16751256-9
* @return {string} = 16751256
*/
const RUTnumber = paramrut => RUTclean(paramrut.split('-')[0]);

/*
* @param paramrut {string} = 16.751.256-9 / 16751256-9
* @return {string} = 9
*/
const RUTDv = paramrut => RUTclean(paramrut.split('-')[1]);

/*
* @param paramrut {string} = 16751256
* @return {string} = 167512569
*/
const RUTNumAppendDv = paramrut => `${paramrut}${RUTgetDv(paramrut)}`;

export { RUTnumber, RUTvalidate, RUTclean, RUTformat, RUTDv, RUTgetDv, RUTNumAppendDv };
