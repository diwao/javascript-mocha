class PureImaginaryNumber {
  constructor(num) {
    if (typeof num !== 'number') {
      throw new TypeError();
    }
    if (num === 0) {
      throw new Error('虚部に0は指定できません');
    }
    this.num = num;
  }
  toString() {
    return `${this.num}i`;
  }
}
module.exports = PureImaginaryNumber;
