const assert = require('assert');

const PurelyImaginaryNumber = require('../lib/PurelyImaginaryNumber');

describe('純虚数', () => {

  describe('虚部の要件', () => {
    it('虚部が0である場合はエラーとする', () => {
      assert.throws(() => {
        new PurelyImaginaryNumber(0);
      }, /虚部に0は指定できません/);
    });
    it('虚部がnumber型でない場合はエラーとする', () => {
      assert.throws(() => {
        new PurelyImaginaryNumber('hoge');
      }, TypeError);
    });

    it('虚部が整数でない場合はエラーとする', () => {
      assert.throws(() => {
        new PurelyImaginaryNumber(3.5);
      }, Error);
    });
  });

  context('虚部 に 4 を与えて 純虚数 を生成した場合', () => {
    let sut;
    beforeEach(() => {
      sut = new PurelyImaginaryNumber(4);
    });
    it('文字列表現は"4i"', () => {
      assert(sut.toString() === '4i');
    });
    it('共役は純虚数-4i', () => {
      const conjugate = sut.getConjugate();
      assert(conjugate.isEqualTo(new PurelyImaginaryNumber(-4)));
    });
  });

  context('虚部 に -3 を与えて 純虚数 を生成した場合', () => {
    let sut;
    beforeEach(() => {
      sut = new PurelyImaginaryNumber(-3);
    });
    it('文字列表現は"-3i"', () => {
      assert(sut.toString() === '-3i');
    });
    it('共役は純虚数3i', () => {
      const conjugate = sut.getConjugate();
      assert(conjugate.isEqualTo(new PurelyImaginaryNumber(3)));
    });
  });

  context('虚部が 1 である場合', () => {
    it('虚部が1の場合に文字列"i"を返す', () => {
      const sut = new PurelyImaginaryNumber(1);
      assert(sut.toString() === 'i');
    });
  });

  context('虚部が -1 である場合', () => {
    it('虚部が-1の場合に文字列"-i"を返す', () => {
      const sut = new PurelyImaginaryNumber(-1);
      assert(sut.toString() === '-i');
    });
  });

  describe('同一性の判定', () => {
    it('虚部が同一の値を持つ純虚数同士を同一であるとみなす', () =>{
      const sut1 = new PurelyImaginaryNumber(1);
      const sut2 = new PurelyImaginaryNumber(1);
      assert(sut1.isEqualTo(sut2) === true);
    });
    it('虚部が異なる値を持つ純虚数同士を同一でないとみなす', () => {
      const sut1 = new PurelyImaginaryNumber(1);
      const sut2 = new PurelyImaginaryNumber(3);
      assert(sut1.isEqualTo(sut2) === false);
    });
    describe('比較対象が PurelyImaginaryNumber 型でない場合は false を返す', () => {
      const sut = new PurelyImaginaryNumber(4);
      it('nullと比較', () => assert(sut.isEqualTo(null) === false));
      it('numberと比較', () => assert(sut.isEqualTo(999) === false));
      it('stringと比較', () => assert(sut.isEqualTo('hoge') === false));
    });
  });

});
