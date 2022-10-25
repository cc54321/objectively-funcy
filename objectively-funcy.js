// Your code here.

/*Tasks

getFirstName - returns the value of the firstName property of the given person object
*/
function getFirstName(person){
  return person.firstName;
}
let person = {firstName: 'Colin', lastName: 'Jaffe'}

console.log(getFirstName(person));

/*
getFirstName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin'
getFirstName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'
getLastName - returns the value of the lastName property of the given person object

*/function getLastName(person){
  return person.lastName;
}
//let person = {firstName: 'Colin', lastName: 'Jaffe'}

console.log(getLastName(person));

/*
getLastName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Jaffe'
getLastName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'
getFullName - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object

*/function getFullName(person){
  return person.firstName + " " + person.lastName;
}
//let person = {firstName: 'Colin', lastName: 'Jaffe'}

console.log(getFullName(person));
/*
function getFullName(person){
  return person.firstname + " " + person.lastName;
}
console.log(getFullName(person));

/*
getFullName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin Jaffe'
getFullName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra Solano'
setFirstName - changes the value of the firstName property of the given person object to the given value
/** `setFirstName` - changes the value of the firstName property of the given person object to the given value
* `setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Jaffe'}`
* `setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Solano'}`
*/
function setFirstName(person, newFirstName){

  //update the first name using the (.) 
  person.firstName = newFirstName;
  return person; //return the modified object
 //defined a person object
}
//let person1 = {firstName: 'Colin', lastName: 'Jaffe'}
//let person2 = {firstName: 'Petra', lastName:'Solano'}


//console.log(setFirstName(person1, 'Redacted'));
//console.log(setFirstName(person2, 'Anthony'));
/*
setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Jaffe'}
setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', 
lastName: 'Solano'}

function setFirstName(person, newFirstName){

  //update the first name using the (.) 
  person.firstName = newFirstName;
  return person; //return the modified object
 }

 /*defined a person object
let person1 = {firstName: 'Colin', lastName: 'Jaffe'}
let person2 =  {firstName: 'Petra',lastName:'Solano'}
console.log(setFirstName(person1, 'Redacted'));
console.log(setFirstName(person2, 'Anthony'));
/*
setAge - changes the value of the age property of the given person object to the given value*/
function setAge(person, newAge){
  person.age = newAge;
}
setAge(person, 45);
setAge(person, 35);
/*
setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 45}
setAge({firstName: 'Petra', lastName: 'Solano', age: 29}, 35) // -> {firstName: 'Petra', lastName: 'Solano', age: 35}
giveBirthday - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property

giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}
giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}) // -> {firstName: 'Solano', lastName: 'Solano', age: 30}
giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}

*/
function giveBirthday(person){
  //if person.age exists, increment it by 1
  if (person.age !== undefined){
     person.age += 1
  // otherwise add property 'age' and set it to 1
  }else {
    person.age = 1;
  }
  return person
}
//console.log(giveBirthday(person1));



/*
marry - sets the marital status of both given people to true and sets each person's spouseName property to be the full name of the other

const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: false}
marry(person1, person2)
console.log(person1) // -> {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
console.log(person2) // -> {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
*/
function marry(person1, person2) {
  person1.married = true;
  person2.married = true;

  person2.spouseName = person1.firstName + " " + person1.lastName;
  person1.spouseName = person2.firstName + " " + person2.lastName;
}
 /*
  marry(person1);
  marry(person2);
  console.log(person1)
  console.log(person2)







/*
divorce - changes the marital status to false and removes the spouseName property from both given people
const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
divorce(person1, person2);
console.log(person1) // -> {firstName: 'Colin', lastName: 'Jaffe', married: false} 
console.log(person2) // -> {firstName: 'Petra', lastName: 'Solano', married: false}


*/
function divorce(person1, person2) {
person1.married = false;
person2.married = false;

delete person1.spouseName;
delete person2.spouseName;

}
/*
divorce(person1,person2);

console.log(person1)
console.log(person2)
*/
