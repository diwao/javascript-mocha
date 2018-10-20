const PurelyImaginaryNumber = require('./PurelyImaginaryNumber');
const requireNonZeroInt = require('./requireNonZeroInt');

class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    requireNonZeroInt(realPart, '実部');
    this.realPart = realPart;
    this.imaginaryPart = new PurelyImaginaryNumber(imaginaryPart);
  }
  toString() {
    const imaginaryPart = this.imaginaryPart.imaginaryPart;
    const sign= (imaginaryPart < 0) ? '-' : '+';
    return `${this.realPart} ${sign} ${Math.abs(imaginaryPart)}i`;
  }
}

module.exports = ImaginaryNumber;
