// // Ep -> 40
// // ----------- function decleration -----------------
function square (num) { // function decleration // Parameter
  return num * num;
}
const result = square(2);  // Arguments
console.log(result);


// ---------------- function Expression--------------
//  const square = function (num) {
//     return num * num;

//  }
 // in console-> square(num)// num = 0,1,2,3,...........
 



 // ------------- using a Arrow function ------------------

// const square =  (a) => { // EXPLICITE RETURN
//     return a * a;
// }

// or ,
// const square = (num) => num * num; // This a IMPLICITE RETURN in the js // num -> 0,1,2,3..........
// const square = num => num * num;
// const add = (a, b) =>  a + b; // add implicite add or return
// const random = () => Math.random(); // in console-> random()



// --------- Arrow function in the setTimeout()-------------
// setTimeout(() => { // arrow function
//     console.log("Hiii");
// }, 2000); // 2 second delay


