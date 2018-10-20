const assert = require('assert');

const PureImaginaryNumber = require('../lib/PureImaginaryNumber');

describe('純虚数', () => {
  it('0ではない整数で生成できる', () => {
    const sut = new PureImaginaryNumber(4);
    assert(sut);
  });

  it('生成した純虚数から 文字列表記 (notation) を取得する', () => {
    const sut = new PureImaginaryNumber(4);
    assert(sut.toString() === '4i');
  });

});
