const findTheOldest = function(people) {
    return people.sort(ascendingAge).at(-1);
};

function ascendingAge(person_a, person_b) {
    return computeAge(person_a) - computeAge(person_b);
}

function computeAge(person) {
    if (person.yearOfDeath === undefined) {
        return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
