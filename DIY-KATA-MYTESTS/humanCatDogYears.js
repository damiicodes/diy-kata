function humanCatDogYears(number) {
    let catYears = 15
    let DogYears = 15
    let ageRemainder = (number - 2)

    if (number >= 2) {
        catYears += 9, DogYears += 9
    }

    ageCatYears = catYears + (ageRemainder * 4)
    agedogYears = DogYears + (ageRemainder * 5)

    toArray = [number, ageCatYears, agedogYears]
    return toArray


}

module.exports = humanCatDogYears