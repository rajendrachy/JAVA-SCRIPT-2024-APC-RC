// const fruits = ['Mango', 'Apple', 'Orange'];
// console.log(fruits)
// const myFruits = fruits; // copy by assign
// myFruits.push('Dates');
// myFruits.push('Grapes');
// console.log(myFruits);



// ------------- in Objects -----------------

// const user = {
//     firstName : 'Rajendra',
//     lastName : 'Chaudhary',
// }

// const user2 = user;
// user.lastName = 'CHY';
// console.log(user); // change in the user and user 2 -->> change in the both
// console.log(user2);




// ------------------- Right way to copy in OBJ---------------

// const user = {
//     firstName : 'Rajendra',
//     lastName : 'Chaudhary',
// }

// const user2 = {}; 
// // ---- Using a Object.assign() ---------
// Object.assign(user2,user); // this is useful begore 2016 // User all the property is assign to the  USER2-->> allthe property
// console.log(user2);




// --------- Array -> (Copy in array)-----------------

// const fruits = ['Mango', 'Apple', 'Orange'];
// const myFruits = [];
// Object.assign(myFruits, fruits);
// console.log(myFruits);
// console.log(fruits);
// myFruits.push('Grapes');
// console.log(myFruits);
// console.log(fruits);





// -----------Right way Using a Spread Operator-----------------

// const user = {
//     firstName : 'Rajendra',
//     lastName : 'Chaudhary',
// }
// const user2 = {...user}; // using a spread operator // COPY
// console.log(user2);




// ---- using a spread operator --------------

// const fruits = ['Mango', 'Apple', 'Orange'];
// const myFruits = [...fruits]; // copy all the values from fruits or duplicate
// console.log(myFruits);
// console.log(fruits);



// --- another method to copy an array--------------
// ---------- concat------------

// const fruits = ['Mango', 'Apple', 'Orange'];
// const myFruits = [].concat(fruits); // create a new array and copy all the value from the fruits
// console.log(myFruits);
// myFruits.push('Grapes'); // add onlo on the myFruits
// console.log(myFruits);
// console.log(fruits);



// --------- slice---------------
// const fruits = ['Mango', 'Apple', 'Orange', "jd"];
// const myFruits = fruits.slice();
// console.log(myFruits);

// NOTE : -->> // But the best is the spread operator in the javascript to copy the value of one obj or array from the another array or the object





// ------------- Copy spread operator --> MORE -----------------
//---------SHALLOW COPY--------------

// const user = {
//     firstName : 'Rajendra',
//     lastName : 'Chaudhary',
//     pata : {
//         city : 'Dhangadhi',
//         pincode : 9488878,
//     },

//     sub : ['phy', 'che', 'math'] // array
// }

// // console.log(user);
// const user2 = {...user}; // Create a new array and copy all the values same to same
// // console.log(user2);
// const changePin = user.pata.pincode = '0000000';
// console.log(user2); // change pincode in the both user and user2 
// // console.log(user); // chnage in a original array also
// // user2['sub'].push('English'); // adding in the sub
// //or -->> to Push
// user2.sub.push('English'); // another way to push English in th array sub 
// console.log(user2); // SHALLOW COPY


// ------------- Deep Copy -----------------

