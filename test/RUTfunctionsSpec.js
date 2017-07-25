const assert = require('assert');
const RUTfunctions = require('../src/index');

describe('rutGetNumber Test', () => {
  describe('RUTnumber 1', () => {
    it("16.751.256-9 generate: 16751256'", () => {
      assert.equal('16751256', RUTfunctions.rutGetNumber('16.751.256-9'));
    });
  });
  describe('rutGetNumber 2', () => {
    it("16751256-9 generate: 16751256'", () => {
      assert.equal('16751256', RUTfunctions.rutGetNumber('16751256-9'));
    });
  });
  describe('rutValidate 1', () => {
    it('16751256-9 generate: true', () => {
      assert.equal(true, RUTfunctions.rutValidate('16.751.256-9'));
    });
  });
  describe('rutValidate 2', () => {
    it('16751256-9 generate: false', () => {
      assert.equal(true, RUTfunctions.rutValidate('16751256-9'));
    });
  });
  describe('rutValidate 3', () => {
    it('1675125a6-9 generate: false', () => {
      assert.equal(false, RUTfunctions.rutValidate('1675125a6-9'));
    });
  });
  describe('rutValidate 4', () => {
    it('17898425-k generate: true', () => {
      assert.equal(true, RUTfunctions.rutValidate('17898425-k'));
    });
  });
  describe('rutValidate 5', () => {
    it('17898425-K generate: true', () => {
      assert.equal(true, RUTfunctions.rutValidate('17898425-K'));
    });
  });
  describe('rutClean', () => {
    it('16.761.256-9 generate: 167512569', () => {
      assert.equal('167512569', RUTfunctions.rutClean('16.751.256-9'));
    });
  });
  describe('rutFormat', () => {
    it('167512569 generate: 16.761.256-9', () => {
      assert.equal('16.751.256-9', RUTfunctions.rutFormat('167512569'));
    });
  });
  describe('rutGetDv 1', () => {
    it('16.751.256-9 generate: 9', () => {
      assert.equal('9', RUTfunctions.rutGetDv('16.751.256-9'));
    });
  });
  describe('rutGetDv 2', () => {
    it('16751256-9 generate: 9', () => {
      assert.equal('9', RUTfunctions.rutGetDv('16751256-9'));
    });
  });
  describe('rutCalcDv', () => {
    it('16751256 generate: 9', () => {
      assert.equal('9', RUTfunctions.rutCalcDv('16751256'));
    });
  });
  describe('rutAddDv', () => {
    it('16751256 generate: 167512569', () => {
      assert.equal('167512569', RUTfunctions.rutAddDv('16751256'));
    });
  });
  describe('Test deprecated', () => {
    it('16.751.256-9 generate: 16751256', () => {
      assert.equal('16.751.256-9', RUTfunctions.testDeprecated('16751256'));
    });
  });
});
