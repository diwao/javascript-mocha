const requireNonZeroInt = require('./requireNonZeroInt');

class PurelyImaginaryNumber {
  constructor(imaginaryPart) {
    requireNonZeroInt(imaginaryPart, '虚部');
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
    if (!(other instanceof PurelyImaginaryNumber)) {
      return false;
    }
    return other.imaginaryPart === this.imaginaryPart;
  }

  getConjugate() {
    return new PurelyImaginaryNumber(-1 * this.imaginaryPart);
  }
}
module.exports = PurelyImaginaryNumber;
