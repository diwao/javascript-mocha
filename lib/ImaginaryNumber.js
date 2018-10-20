const requireNonZeroInt = require('./requireNonZeroInt');

class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    requireNonZeroInt(realPart, '実部');
    requireNonZeroInt(imaginaryPart, '虚部');
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    const sign= (this.imaginaryPart < 0) ? '-' : '+';
    return `${this.realPart} ${sign} ${Math.abs(this.imaginaryPart)}i`;
  }
}

module.exports = ImaginaryNumber;
