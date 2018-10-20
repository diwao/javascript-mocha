const PurelyImaginaryNumber = require('./PurelyImaginaryNumber');

class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    if (typeof realPart !== 'number') {
      throw new TypeError();
    }
    if (realPart === 0) {
      throw new Error('実部に0は指定できません');
    }
    if (!Number.isInteger(realPart)) {
      throw new Error();
    }
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
