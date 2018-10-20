class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    const sign= (this.imaginaryPart < 0) ? '-' : '+';
    return `${this.realPart} ${sign} ${Math.abs(this.imaginaryPart)}i`;
  }
}

module.exports = ImaginaryNumber;
