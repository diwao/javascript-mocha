class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    let sign= '+';
    if (this.imaginaryPart < 0) {
      sign = '-';
    }
    return `${this.realPart} ${sign} ${Math.abs(this.imaginaryPart)}i`;
  }
}

module.exports = ImaginaryNumber;
