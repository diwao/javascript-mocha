class PureImaginaryNumber {
  constructor(num) {
    if (num === 0) {
      throw new Error('虚数に0は指定できません');
    }
    this.num = num;
  }
  toString() {
    return `${this.num}i`;
  }
}
module.exports = PureImaginaryNumber;
