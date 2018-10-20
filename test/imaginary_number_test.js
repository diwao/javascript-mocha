const assert = require('assert');

const ImaginaryNumber = require('../lib/ImaginaryNumber');

describe('実部と虚部を与えて虚数を生成する', () => {
  describe('実部の要件', () => {
    it('実部が0である場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber(0, 3);
      }, /実部に0は指定できません/);
    });
    it('実部がnumber型でない場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber('hoge' ,3);
      }, TypeError);
    });

    it('実部が整数でない場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber(3.5, 3);
      }, Error);
    });
  });

  describe('虚部の要件', () => {
    it('虚部が0である場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber(3, 0);
      }, /虚部に0は指定できません/);
    });
    it('虚部がnumber型でない場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber(3 ,'hoge');
      }, TypeError);
    });

    it('虚部が整数でない場合はエラーとする', () => {
      assert.throws(() => {
        new ImaginaryNumber(3, 3.5);
      }, Error);
    });
  });

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

  context('実部に4、虚部に-2を与えた場合', () => {
    it('文字列表現は"4 - 2i"', () => {
      const sut = new ImaginaryNumber(4, -2);
      assert(sut.toString() === '4 - 2i');
    })
  });
});
