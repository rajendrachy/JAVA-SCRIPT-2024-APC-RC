// setTimeout('hi'); // hi treate like a Variable  // Error ->  hi is not defined
// setTimeout('console.log(true)') // true -->> treate like a js code not like a string in the settimeout


// console.log('console.log('hello')') // error 
// SOLUTION:
// use in the one line
//setTimeout('console.log("Rajendra Chaudhary"); console.log("My name is :: ");', 2000); // 2000 milli second or 2 second


// -------------- use in a multiple line-----------------

// setTimeout(`
//     console.log("Rajendra Chaudhary");  
//     console.log("My name is :: ");`, 2000); // 2000 milli second or 2 second// use semiclone or not doesnot matter in the backtick



// -----------------
// use all this in the console -->> click shift + Enter
// setTimeout(`console.log("Hi")`, 2000); 
// setTimeout(`console.log("Hiii")`, 4000); 
// setTimeout(`console.log("Hiii")`, 6000); 

 //clearTimeout(5) // Pass the ID which is in the Console




// --------------- Store all this in the varaibale---------------
// debugger
//  const timer1 = setTimeout(`console.log("Hi")`, 2000); 
//  const timer2 = setTimeout(`console.log("Hiii")`, 4000); 
//  const timer3 = setTimeout(`console.log("Hiii")`, 6000); 
//  console.log(timer1); // print the id of the timer1
// console.log(timer3);


// both can do same timeout and interval
// mostly use the clearTimeout();
// clearTimeout(4); // id-> 4 and tha last timer3 result is not display 
// clearInterval(timer2); // use a declera variable or the its id which is in the console




// ------------- Using a function passing ----------------------

//Use of the setInterval()-> can create a infinite of the print -> Hi 
// const timer1 = setTimeout(`console.log("Hi")`, 1000); 
// const timer2 = setTimeout(`console.log("Hiii")`, 2000); // without using ` ` in the console.log ->> the value under it is print first not working -> setTimeout()
// const timer3 = setTimeout(a, 3000, 'lsj', 99, 89, 'skljf', [1,7]); // a() ->> use of this is not working the -> setTimeout() // Hello world print as a output 

// function a() {
//      console.log(arguments); // arguments is used to pass Some values, array in the -> setTimeOut()
//     console.log(arguments[2]); // 89
//  console.log("Hello world"); 
// }



// -------------------aSynchronous code -------------------
//debugger
setTimeout(function() {  
    console.log("Hii, my name is Rajendra Chaudhary"); // Second Print This
})
// --------synchronous code--------------
console.log("Hi"); // First Print This // immidiate 


