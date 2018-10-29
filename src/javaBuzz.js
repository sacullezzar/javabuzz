var Javabuzz = function () {};

Javabuzz.prototype.isDivisibleByThree = function (number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function (number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByBoth = function (number) {
  return (number % 5 === 0 && number % 3 === 0);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype._isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByBoth(number)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};
