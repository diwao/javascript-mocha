const assert = require('assert');

const ImaginaryNumber = require('../lib/ImaginaryNumber');

describe('虚数', () => {
  const sut = new ImaginaryNumber(4, 2);
  assert(sut);
});
