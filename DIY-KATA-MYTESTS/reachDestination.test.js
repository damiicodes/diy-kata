const { humanCatDogYears } = require('.');
const reachDestination = require('./reachDestination');

it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.")
}
)