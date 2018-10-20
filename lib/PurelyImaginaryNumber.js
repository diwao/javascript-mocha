class PurelyImaginaryNumber {
  constructor(imaginaryPart) {
    if (typeof imaginaryPart !== 'number') {
      throw new TypeError();
    }
    if (imaginaryPart === 0) {
      throw new Error('虚部に0は指定できません');
    }
    if (!Number.isInteger(imaginaryPart)) {
      throw new Error();
    }
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    switch (this.imaginaryPart) {
      case 1:
        return 'i';
      case -1:
        return '-i';
      default:
        return `${this.imaginaryPart}i`;
    }
  }

  isEqualTo(other) {
    return other.imaginaryPart === this.imaginaryPart;
  }

  getConjugate() {
    return new PurelyImaginaryNumber(-1 * this.imaginaryPart);
  }
}
module.exports = PurelyImaginaryNumber;
