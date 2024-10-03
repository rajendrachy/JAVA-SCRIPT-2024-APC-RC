//Ep-48
// const nums1 = [1, 2, 3, 4]

// function add(a, b, c, ...nums) { // ...nums -> restparameter // rest parameter must be in the last 
//     console.log(a, b, c);
//     console.log('nums:', nums);
//     // let sum = 0
//     // for(let i = 0; i < nums.length; i++) {
//     //     sum = sum + nums[i]
//     // }
//     // return sum
// }

// // console.log(add(1,2,3,4,5));
// // console.log(add(...nums1));
// console.log(add(1,2,3)); // a=1, b=2, c= 3, and restparameter => empty i.e -> []




// function add() {
  return [...arguments].reduce((acc, curr) => acc + curr) // [...arguments]  convert into a array
// }

// function add() {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
  }
  
  const result = add(...nums1)