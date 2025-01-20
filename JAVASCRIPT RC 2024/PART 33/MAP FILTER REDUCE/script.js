// Ep- 43

// _____________ MAP AND FOREACH__________________

 const months = ['January', 'February', 'March', 'April', 'May', 'December']

months.map((month)=> {
    console.log(month);
});

// const months = ['January', 'February', 'March', 'April', 'May', 'December']
// months.forEach((month)=> { 
//     console.log(month);
//     return month.toUpperCase();
// });




// const months = ['January', 'February', 'March', 'April', 'May', 'December']
// const capitalMonth = months.map((month) => { // map create a new array and written that value in the new array 
//     console.log(month);
//     return month.toUpperCase();
// });
// console.log(capitalMonth);





// ----------- INDEX in the case of the MAP----------

// const months = ['January', 'February', 'March', 'April', 'May', 'December']
// const capitalMonth = months.map((month, index) => { // map create a new array and written that value in the new array 
//     console.log("The index is : ", index, ",", "Months: ", month);
//     return month.toUpperCase();
// });
// console.log(capitalMonth); // print in the capitan and craete a new array inthe js






// ----------- INDEX in the case of the FOREACH----------

// const months = ['January', 'February', 'March', 'April', 'May', 'December']
// const capitalMonth = months.forEach((month, index) => { // map create a new array and written that value inthe new array 
//     console.log("The indes is", index, ",", "Months: ", month);
//     return month.toUpperCase();
// });
// console.log(capitalMonth); // undefined






// _______________FILTER_________________
// filter create a new array 

// const months = ['January', 'February', 'March', 'April', 'May', 'December']
// const filteredMonth = months.filter((month, index, array) => { 
        // console.log("The indes is", index, ",", "Months: ", month);
        // console.log(array);
        // console.log(month.length);
        // return true;
        // return false;

        // condition
        //return month.length <=5; // return that string which value is ===>>> ans_<=5
        // return (month.length == 5 || month.length > 5);

        // return month.toLowerCase().includes('m'); // whose have the letter 'm' in this array 
//         return index>=3;
//     });
// console.log(filteredMonth); 
    
    


// ____________task_________________________
// const student = [ // array
//    {
//     name : "Akash",
//     age : 21,
//   },
    
//   {
//     name : "Raj",
//     age : 17,
//   },

//   {
//    name : "Rajendra",
//    age : 19,
//   },

//   {
//     name : "Ram",
//     age : 23,
//    },

//    {
//     name : "Rakesh",
//     age : 20,
//    },

// ];

// const adultStudents = student.filter((student) => {
//     return student.age >= 18;
// }).map((student) => {
//     return student.name;
// })
// console.log(adultStudents); // return only name of the students



// const adultStudents = student.filter((student) => {
//     return student.age >= 18;
// }).map((student) => {
//     return student.name;
// }).filter((student) => {
//     return student.includes('A');
// })
// console.log(adultStudents); // retuern name starts with a ---->>> 'A'





// ___________________REDUCE______________________
// script2.js

