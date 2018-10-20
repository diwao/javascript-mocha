const assert = require('assert');

const PureImaginaryNumber = require('../lib/PureImaginaryNumber');

describe('純虚数', () => {

  describe('虚部の要件', () => {
    it('虚部が0である場合はエラーとする', () => {
      assert.throws(() => {
        new PureImaginaryNumber(0);
      }, /虚部に0は指定できません/);
    });
    it('虚部がnumber型でない場合はエラーとする', () => {
      assert.throws(() => {
        new PureImaginaryNumber('hoge');
      }, TypeError);
    });

    it('虚部が整数でない場合はエラーとする', () => {
      assert.throws(() => {
        new PureImaginaryNumber(3.5);
      }, Error);
    });
  });

  context('虚部 に 4 を与えて 純虚数 を生成した場合', () => {
    let sut;
    beforeEach(() => {
      sut = new PureImaginaryNumber(4);
    });
    it('文字列表現は"4i"', () => {
      assert(sut.toString() === '4i');
    });
  });

  context('虚部 に -3 を与えて 純虚数 を生成した場合', () => {
    let sut;
    beforeEach(() => {
      sut = new PureImaginaryNumber(-3);
    });
    it('文字列表現は"-3i"', () => {
      assert(sut.toString() === '-3i');
    });
  });

});
