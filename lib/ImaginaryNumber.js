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
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    const sign= (this.imaginaryPart < 0) ? '-' : '+';
    return `${this.realPart} ${sign} ${Math.abs(this.imaginaryPart)}i`;
  }
}

module.exports = ImaginaryNumber;
