// _________________REDUCE in the JS_______________________

const nums = [1, 2, 3, 4, 5]

const sum = nums.reduce((accumulator, current, i) => { // multiple value is reduce to one 1 -> value
    // console.log(i, current);
    // console.log(accumulator);
    console.log(accumulator, current);
    return accumulator + current  // (use * , + , -, / , %)
    // return "Raj";
}, 0) // accumulator is start from the 0 => Zero we can put num ->> 0,1,2,3, .................
console.log(sum);
