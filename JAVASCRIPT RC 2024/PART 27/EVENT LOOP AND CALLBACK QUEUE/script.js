 //debugger
console.log("Hi-1");

function hello() {
    console.log("Hello World!");

}
hello(); // Where this function call there will the output -->> print


for(let i=1; i<=4; i++) {
    console.log(i);
}

setTimeout(function() {
   console.log("Hi-3"); // PRINT IN -> LAST
}, 2000);  // after 2 second

console.log("Hi-2"); // immidiate



// // ------------ setTimeout---  in the function -----------------

// function hello () {
//     console.log("Hello World!");
// }
// setTimeout(hello, 2000);
