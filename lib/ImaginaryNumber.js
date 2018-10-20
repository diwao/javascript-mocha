class ImaginaryNumber {
  constructor(realPart, imaginaryPart) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }
  toString() {
    return `${this.realPart} + ${this.imaginaryPart}i`;
  }
}

module.exports = ImaginaryNumber;
