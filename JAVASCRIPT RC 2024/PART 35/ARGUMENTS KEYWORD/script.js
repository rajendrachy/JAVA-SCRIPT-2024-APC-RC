// function add(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(1,3));




// _________________sum of the number__________________
// __________________function definatin_______________________
// function add () { // no paametr usind a arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++) {
//         // console.log(arguments[i]);
//         sum = sum + arguments[i];
//     }
//     return sum;

// }
// console.log(add(1,2,3,4))






// _____________function expression___________________
// const add = function () { // no paametr usind a arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++) {
//         // console.log(arguments[i]);
//         sum = sum + arguments[i];
//     }
//     return sum;

// }
// console.log(add(1,2,3,4))



// ________________arrow function_____________________
const add = (...nums) =>  {  // (...nums)-> rest parameters // argument is not work in the ARROW FUNCTION
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        // console.log(arguments[i]);
        sum = sum + nums[i];
    }
    return sum;

}
console.log(add(1,2,3,4))
