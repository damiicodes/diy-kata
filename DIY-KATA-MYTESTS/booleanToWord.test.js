const booleanToWord = require("./booleanToWord");

it('Returns Yes when passed True and No when passed False', () => {
    expect(booleanToWord(true)).toBe("Yes")
    expect(booleanToWord(false)).toBe("No")
}
)