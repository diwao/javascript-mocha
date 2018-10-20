class PureImaginaryNumber {
  constructor(num) {
    if (typeof num !== 'number') {
      throw new TypeError();
    }
    if (num === 0) {
      throw new Error('虚部に0は指定できません');
    }
    if (!Number.isInteger(num)) {
      throw new Error();
    }
    this.num = num;
  }
  toString() {
    if (this.num === 1) {
      return 'i';
    }
    if (this.num === -1) {
      return '-i';
    }
    return `${this.num}i`;
  }
}
module.exports = PureImaginaryNumber;
