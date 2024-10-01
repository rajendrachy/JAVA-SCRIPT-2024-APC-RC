// 1. // type -> Math in => console
// Math -> is a OBJ




// 2. Math.PI -> type in console
  // 3 // Math.SQRT2




//   console.log(Math.PI);
//   console.log(Math.sqrt(16)); // 4
//   console.log(2 ** 6); // 64
//   console.log(Math.pow(2, 6)); // 64





// 1. ----------------Math.floor---------------
//  console.log(Math.floor(2.99)); // 2 -->> remove the decimal places
//  console.log(Math.floor(2.9999999999999999)); // 3 // .16 -> values 
//  console.log(Math.floor(-2.5)) // -3 -->>  not remove the decomal place -->> make one step back small





//2. ----------------Math.ceil()-----------------

// console.log(Math.ceil(3.1)); // 1 step increasing
// console.log(Math.ceil(-2.9)); // -2 // because =>  -2 > -2.9





// 3. ---------------Math.round()-----------------
// console.log(Math.round(3.8)); // clogets number written
// // output -> 4





//4 . ----------- Math.random() ------------------------
// console.log(Math.random()); // math.random() given the number between 0 to 1 but not 1 
// it gives the random nuberr while run 1000 times or more not give same value 









// console.log(Math.floor(Math.random() * 11) + 10); // calculate a random no betw 10 to 20
                         

// Explanation: ----->>>> 

// Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
// Math.random() * 11 generates a number between 0 and 11 (exclusive), effectively giving you numbers from 0 to 10.
// Math.floor() rounds down the result to the nearest whole number, giving you values between 0 and 10.
// Adding 10 shifts this range to 10–20.




// --------------Another-----------------

// console.log(8/0); // Infinity
// console.log(-8/0); // -Infinity
// console.log(typeof (-8/0)); // number 
// console.log(0/0); // NaN // typeof NaN -> number



//-> QN .------ Example to calculate a area of the rectangle-------------

// const val1 = prompt("Enter the value");
// const val2 = prompt("Enter a value 2");

// const result  = val1 * val2;
// // console.log("The area of rectangle is" , Math.floor(result));
// document.write(result); // shown in the webpage live  not in the console
