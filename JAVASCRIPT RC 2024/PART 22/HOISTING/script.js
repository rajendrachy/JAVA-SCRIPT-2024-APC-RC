// ------------ Using VAR-----------------

// debugger
// console.log(username); // undefined
// var username = "Rajendra"; // While using var it is a Global variable 
//        //This is a HOIST VARIABLE 
// console.log(username); // Rajendra



// --------------- Using a const ----------------
// debugger
// console.log(username); // error but -->>  HOISTING
// const username = "Rajendra Chaudhary";
// console.log(username); // Rajendra Chaudhary


//-------------- Study about from google---------------------
// 1. Temporal Dead Zone(TDZ)
// let and const -->> are in the temporal dead zone so we can not access variable created by the let and const
// but let and const -->> are also HOISTING 




// ---------------------  A. ---------------------
// debugger
// console.log(a); // undefined
// var a = "Rajendra";
// function hi() { // Function Decleration but both are function defination A & B
//     console.log('Hello'); // hello

// }
// hi();


// B. ------------------another way of function Creating-----------------

// 1. sayHi () in the last

// debugger

// const sayHi = function () {  // This is a FUNCTION EXPRESSION A & B
//     console.log("Hiii");
// }
// sayHi(); // Hiii





// 2, B.--------------sayHi() in the top
//debugger
//  sayHi(); // error // Cannot access 'sayHi' before initialization

// const sayHi = function () { // This is a FUNCTION EXPRESSION but both are function defination A & B
//     console.log("Hiii"); // this function creation is also called a Annonymus function
// }





// ---------- Anonymous Function -----------------
// A function that is declared without a name is called an anonymous function.

// var sayHi = function () { // Anonymous Function 
//     console.log("Heee!");
// }

// sayHi(); // sayHi() -> function call & sayHi() -> variable declare also 



