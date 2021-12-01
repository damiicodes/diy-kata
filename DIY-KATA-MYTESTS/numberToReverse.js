function numberToReverse(number) {
    let toArray = Array.from(number.toString()).map(Number);
    let toReverse = toArray.reverse();
    return toReverse;

}

module.exports = numberToReverse