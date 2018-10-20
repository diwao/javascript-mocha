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
    switch (this.num) {
      case 1:
        return 'i';
      case -1:
        return '-i';
      default:
        return `${this.num}i`;
    }
  }

  isEqualTo(other) {
    return other.num === this.num;
  }
}
module.exports = PureImaginaryNumber;
