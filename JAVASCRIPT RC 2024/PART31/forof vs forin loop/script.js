// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

// --------- forin loop---------------

// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }



// -------------- for-of Loop ----------------

// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];
// for(i of fruits){
//     console.log(i);
// }



// ------------- IN - string ----------------
// const user = "Rajendra Chaudary";
// for(const letter of user) {
//     console.log(letter);
// };

// ------------ in OBJECT--------------
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 50,      
    eyeColor : 'blue',
    city : 'Banglore',
}
// for(const key in person) { // for-of loop is not used in the OBJECTS
//    // console.log(key); // only print key not print the value => (kay : value);
//    console.log(key, ':' , person[key]); // key : value
// }


// -------   to get all the keys: for-of LOOP is used in this ------
const personKeys = Object.keys(person);
const personValues = Object.values(person);
// for(const key of personKeys) {
//     console.log(key);
// }


for(const value of personKeys) { // using for-in the no. is print
    console.log(value);
}

