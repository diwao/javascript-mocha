class PureImaginaryNumber {
  constructor(num) {
    if (num === 0) {
      throw new Error();
    }
    this.num = num;
  }
  toString() {
    return `${this.num}i`;
  }
}
module.exports = PureImaginaryNumber;
