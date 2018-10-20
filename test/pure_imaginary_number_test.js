const assert = require('assert');

const PureImaginaryNumber = require('../lib/PureImaginaryNumber');

describe('純虚数', () => {
  it('0ではない整数で生成できる', () => {
    const sut = new PureImaginaryNumber(4);
    assert(sut);
  });
});
