function FizzBuzz(a) {
    if (typeof a !== "number") {
        return "Not a number";
    } else if (a % 3 === 0 && a % 5 == 0) {
        return "FizzBuzz";
    } else if (a % 3 === 0) {
        return "Fizz";
    } else if (a % 5 === 0) {
        return "Buzz";
    } else return a;

}

module.exports = FizzBuzz