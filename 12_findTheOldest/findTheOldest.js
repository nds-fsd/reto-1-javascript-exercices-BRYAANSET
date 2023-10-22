const findTheOldest = function(people) {
    const today = new Date();

    const oldestPerson = people.reduce((oldest, person) => {
        const ageOldest = getAge(oldest, today);
        const agePerson = getAge (person, today);

        return ageOldest < agePerson ? person : oldest;
    });

    return oldestPerson;
};

function getAge(person, today){
    if (!person.yearOfDeath) {
        return today.getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const people = [
    {
        name: 'Juan',
        yearOfBirth: 1923,
        yearOfDeath: 1987
    },
    {
        name: 'Bryan',
        yearOfBirth: 1999
    },
    {
        name: 'Alexis',
        yearOfBirth: 1983,
        yearOfDeath: 2009
    }
];

const oldestPerson = findTheOldest(people);
console.log(oldestPerson.name);

// Do not edit below this line
module.exports = findTheOldest;
