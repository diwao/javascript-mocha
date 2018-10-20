const assert = require('assert');

const PureImaginaryNumber = require('../lib/PureImaginaryNumber');

describe('純虚数', () => {
  it('0ではない整数で生成できる', () => {
    const sut = new PureImaginaryNumber(4);
    assert(sut);
  });

  context('虚部 に 4 を与えて 純虚数 を生成した場合', () => {
    it('文字列表現は"4i"', () => {
      const sut = new PureImaginaryNumber(4);
      assert(sut.toString() === '4i');
    });
  });

  context('虚部 に -3 を与えて 純虚数 を生成した場合', () => {
    it('文字列表現は"-3i"', () => {
      const sut = new PureImaginaryNumber(-3);
      assert(sut.toString() === '-3i');
    });
  });


});
