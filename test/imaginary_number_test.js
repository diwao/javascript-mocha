const assert = require('assert');

const ImaginaryNumber = require('../lib/ImaginaryNumber');

describe('実部と虚部を与えて虚数を生成する', () => {
  const sut = new ImaginaryNumber(4, 2);
  assert(sut.toString() === '4 + 2i');
});
