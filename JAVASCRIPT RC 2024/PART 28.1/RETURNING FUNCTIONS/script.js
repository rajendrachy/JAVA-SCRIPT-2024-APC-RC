//debugger
// const a = 4
// const b = 6


// function add() { 
//     console.log(a + b);
// };
// add();

// console.dir(add);
// console.log(add);




// // ---------------RETURN--------------
// const a = 4
// const b = 6

// function parent () {
//     function add() {
//         console.log(a + b);
//     }
//     return add;
// }

// const add1 = parent();
// console.log(add1);
// console.dir(add1); // -> print a directory





// ------------ Another --------------

function outer() {
    const a = 4
    function parent() {
      const b = 6
      return function() {
        console.log(a + b)
      }
    }
    return parent()
  }
  
  const add1 = outer()
  
  console.dir(add1)

