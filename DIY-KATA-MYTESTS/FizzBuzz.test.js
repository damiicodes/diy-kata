const FizzBuzz = require('./FizzBuzz')

it('Returns Fizz when passed a multiple of 3', () => {
    expect(FizzBuzz(33)).toBe("Fizz")
    expect(FizzBuzz("abc")).toBe("Not a number")
    expect(FizzBuzz(15)).toBe("FizzBuzz")
    expect(FizzBuzz(20)).toBe("Buzz")
    expect(FizzBuzz(19)).toBe(19)
}
)