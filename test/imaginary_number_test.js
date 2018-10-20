const assert = require('assert');

const ImaginaryNumber = require('../lib/ImaginaryNumber');

describe('実部と虚部を与えて虚数を生成する', () => {
  context('実部に4、虚部に2を与えた場合', () => {
    it('文字列表現は"4 + 2i"', () => {
      const sut = new ImaginaryNumber(4, 2);
      assert(sut.toString() === '4 + 2i');
    })
  });

  context('実部に5、虚部に3を与えた場合', () => {
    it('文字列表現は"5 + 3i"', () => {
      const sut = new ImaginaryNumber(5, 3);
      assert(sut.toString() === '5 + 3i');
    })
  });
});
