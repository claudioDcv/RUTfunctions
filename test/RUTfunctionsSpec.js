const assert = require('assert');
const RUTfunctions = require('../src/index');

describe('RUTfunctions Test', () => {
  describe('RUTnumber 1', () => {
    it("16.751.256-9 generate: 16751256'", () => {
      assert.equal('16751256', RUTfunctions.RUTnumber('16.751.256-9'));
    });
  });
  describe('RUTnumber 2', () => {
    it("16751256-9 generate: 16751256'", () => {
      assert.equal('16751256', RUTfunctions.RUTnumber('16751256-9'));
    });
  });
  describe('RUTvalidate 1', () => {
    it('16751256-9 generate: true', () => {
      assert.equal(true, RUTfunctions.RUTvalidate('16.751.256-9'));
    });
  });
  describe('RUTvalidate 2', () => {
    it('16751256-9 generate: false', () => {
      assert.equal(true, RUTfunctions.RUTvalidate('16751256-9'));
    });
  });
  describe('RUTvalidate 3', () => {
    it('1675125a6-9 generate: false', () => {
      assert.equal(false, RUTfunctions.RUTvalidate('1675125a6-9'));
    });
  });
  describe('RUTvalidate 4', () => {
    it('17898425-k generate: true', () => {
      assert.equal(true, RUTfunctions.RUTvalidate('17898425-k'));
    });
  });
  describe('RUTvalidate 5', () => {
    it('17898425-K generate: true', () => {
      assert.equal(true, RUTfunctions.RUTvalidate('17898425-K'));
    });
  });
  describe('RUTclean', () => {
    it('16.761.256-9 generate: 167512569', () => {
      assert.equal('167512569', RUTfunctions.RUTclean('16.751.256-9'));
    });
  });
  describe('RUTformat', () => {
    it('167512569 generate: 16.761.256-9', () => {
      assert.equal('16.751.256-9', RUTfunctions.RUTformat('167512569'));
    });
  });
  describe('RUTDv 1', () => {
    it('16.751.256-9 generate: 9', () => {
      assert.equal('9', RUTfunctions.RUTDv('16.751.256-9'));
    });
  });
  describe('RUTDv 2', () => {
    it('16751256-9 generate: 9', () => {
      assert.equal('9', RUTfunctions.RUTDv('16751256-9'));
    });
  });
  describe('RUTgetDv', () => {
    it('16751256 generate: 9', () => {
      assert.equal('9', RUTfunctions.RUTgetDv('16751256'));
    });
  });
  describe('RUTNumAppendDv', () => {
    it('16751256 generate: 167512569', () => {
      assert.equal('167512569', RUTfunctions.RUTNumAppendDv('16751256'));
    });
  });
});
