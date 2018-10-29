describe('Javabuzz', function() {
  var javabuzz;
  beforeEach(function() {
      javabuzz = new Javabuzz();
    });
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
    it('divisible by 3 AND 5', function() {
      expect(javabuzz.isDivisibleByBoth(15)).toBe(true);
    });
    it('divisible by 3 AND 5', function() {
      expect(javabuzz.isDivisibleByBoth(5)).toBe(false);
    });
  });
});

describe('when playing, says', function() {
  var javabuzz;
  beforeEach(function() {
      javabuzz = new Javabuzz();
    });
  it('"Java" when a number is divisible by three', function() {
    expect(javabuzz.says(3)).toEqual("Java");
  });
  it('"Buzz" when a number is divisible by five', function() {
    expect(javabuzz.says(5)).toEqual("Buzz");
  });
  it('"JavaBuzz" when a number is divisible by both', function() {
    expect(javabuzz.says(15)).toEqual("JavaBuzz");
  });
  it('"number" when a number is not divisible by either', function() {
    expect(javabuzz.says(2)).toEqual(2);
  });
});
