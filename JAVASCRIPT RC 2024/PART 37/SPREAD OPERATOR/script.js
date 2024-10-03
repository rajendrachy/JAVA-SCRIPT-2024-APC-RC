// Ep - 47

// ____________Array and String_____________________
// const num1 = [1, 2, 3, 4];
// const num2 = [5, 6, 7, 8, 9];
// const myName = "Rajendra";
// // console.log(num1.concat(num2)); // [1,2,3,4,5,6,7,8,9]
// const joinArray = [...num1, ...num2, ...myName];
// console.log(joinArray); // [1,2,3,4,5,6,7,8,9]



// __________________OBJECT______________________

// const user = {
//     name : "Rajendra",
//     age : 25,
// }

// const updateUser = {...user , city:"Banglore"}; // adding also possible
// console.log(updateUser);



// ____________Function________________

const joinArray = [1,2,3,4,5,6,7,8,9,10];
const myName = "Rajendra";

function add () {
    
    let sum = 0;
    for(let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum; // spread operatr is not used in the objects
}
console.log(add(...joinArray)); // 55 // using a spread operator
console.log(add(...myName)); // 0Rajendra // depend upon what value of the sum if sum = 6 then output -> 6Rajendra
// if sum not 0 and not initialize by any number then the output -> undefinedRajendra


