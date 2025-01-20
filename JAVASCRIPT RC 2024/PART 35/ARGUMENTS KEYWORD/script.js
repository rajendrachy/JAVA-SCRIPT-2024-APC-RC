// function add(a, b) {
//     //console.log(arguments);
//     return a + b;

// }
// console.log(add(1,3));




// _________________Sum of the number__________________
// __________________function definatin_______________________
// function add () { // no parameter using a arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++) {
//         console.log(arguments[i]);
//         sum = sum + arguments[i];
//     }
//     return sum;

// }
// console.log(add(1,8,3,4))






// _____________function expression___________________
// const add = function () { // no paametr using a arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++) {
//         // console.log(arguments[i]);
//         sum = sum + arguments[i];
//     }
//     return sum;

// }
// console.log(add(1,2,3,4))



// ________________Arrow Function_____________________
// const add = (...nums) =>  {  // (...nums)-> rest parameters // argument is not work in the ARROW FUNCTION
//     let sum = 0;
//     for(let i=0; i<nums.length; i++) {
//         //console.log(arguments[i]);
//         sum = sum + nums[i];
//     }
//     return sum;

// }
// console.log(add(1,2,3,4))
// // 