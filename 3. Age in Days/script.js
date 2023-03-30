function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;

  return function() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }
}
const person = {
  firstName: 'Manish',
  lastName: 'Chand',
  age: 21
};

const logAgeInDays = ageInDays(person);
logAgeInDays(); 
