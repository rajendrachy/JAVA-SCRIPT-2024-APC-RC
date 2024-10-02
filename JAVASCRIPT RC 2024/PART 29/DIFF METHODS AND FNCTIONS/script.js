const maths = {
    E : 2.7656565566,
    add : function add(a, b) {
        return a + b;
    },

    square : function (num) {
        // console.log(num * num); // num square and print undefined
        //so,
        return num * num; 
    },

    subtrace(a, b) {
        return a - b;
    }, 

    cube(cu) {
        // return cu * cu * cu;
        return cu ** 3;
    }
}
console.log(maths.square(8)); // 68 // use in the console -> maths.square(7)
// in the console -> maths.subtrace(12, 8)
// in console -> maths.cube(2);
// use this in th console - > [12, 2].push and -> [12, 2].push(num) ->>num = 0,1,2,3,....... 




// ------------ Methods -----------

// Method: square(num)

// Description: Returns the square of a given number num.
// Usage:
// maths.square(8) → 64.
// In the console: maths.square(7) → 49.




// -------------- functions----------------
// square(num) {
//     return num * num;
// }
