// //this is my first JS code
// console.log('Hello World!!');

// //primitive data types
// let name = 'Ben';
// let age = 40;
// let isApproved = false;
// let occupation = null;
// let passion = undefined;

/* #region Objects */

let person = {
    name: 'Ben',
    age: 40
};
console.log(person.name);

//dot notation
person.name = 'John'
console.log(person.name);

// Bracket notation
person['name'] = 'Mary';
console.log(person.name);
/* #endregion */

/* #region Arrays */

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'
console.log(selectedColors);

/* #endregion  */

/* #region Functions */

performing a task


function greet(name, lastname) {
    console.log('Hey there ' + name + ' ' + lastname);
}

greet('Ben', 'McEwen');

//makes calucations
function square(number) {
    return number * number;
}

console.log(square(2));

/* #endregion */