// function mul (a, b) {
//     return a * b;
// }
// console.log(mul(2,3)); // 6




// ________________Default parameter____________________

function mul (a, b=3) { // b =3 is a default parameter
    return a * b;
 }
console.log(mul(2)); // 6 // if value is pass then default value is not consider
 // mul(2, undefuned); // use the default parameter like b = 3 , when we pass a undefined



// function rollADie(numberofsides = 6) { // defualt parameter
//     return Math.floor(Math.random() * numberofsides) + 1;

// }
// console.log(rollADie());


