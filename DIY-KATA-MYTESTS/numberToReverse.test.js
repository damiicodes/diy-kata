const numberToReverse = require("./numberToReverse");

it('Returns a reversed array from a number', () => {
    expect(numberToReverse(12345)).toStrictEqual([5, 4, 3, 2, 1])
    expect(numberToReverse(6789)).toStrictEqual([9, 8, 7, 6])
}
)