const assert = require('assert');

const PureImaginaryNumber = require('../lib/PureImaginaryNumber');

describe('純虚数', () => {

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
