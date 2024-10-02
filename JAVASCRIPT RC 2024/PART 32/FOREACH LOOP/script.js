// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']
// // for-of loop
// for(const fruit of fruits) {
//     console.log(fruit);
// }

// ------------ forEach Loop -----------------
// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];
// fruits.forEach(function (fruit) { // fruit is a variable
//     console.log(fruit);
// });


//---------forEach using a arow function----------
// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];
// fruits.forEach((fruit)=> { // arrow function
//     console.log(fruit);
//     return fruit.toUpperCase();
// });




const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];
fruits.map((fruit)=> { // arrow function
    console.log(fruit);
    return fruit.toUpperCase();
}); // check all this in the console


