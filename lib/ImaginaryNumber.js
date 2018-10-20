const PurelyImaginaryNumber = require('./PurelyImaginaryNumber');

const requireNonZeroInt = (partValue, partName) => {
  if (typeof partValue !== 'number') {
    throw new TypeError();
  }
  if (partValue === 0) {
    throw new Error(`${partName}に0は指定できません`);
  }
  if (!Number.isInteger(partValue)) {
    throw new Error();
  }
};

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
