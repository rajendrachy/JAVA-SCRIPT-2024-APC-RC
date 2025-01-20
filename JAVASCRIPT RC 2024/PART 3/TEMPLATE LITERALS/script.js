// const message = "Hello world!";
// console.log(message[4]); // o
// //_________________Length_____________________
// console.log(message.length); // 12




// // ------------------Without argumants-----------

// console.log(message.toLocaleUpperCase());
// console.log(message.toLocaleLowerCase());

// const faltumsg = '        Hi, I am Rajendra        ';
//console.log(faltumsg)
 // console.log(faltumsg.trim()) // reduce the spaces from start and end
// //                              Only remove the spaces not _____ and other
//  console.log(faltumsg.trimStart()); // remove the space from start
// console.log(faltumsg.trimEnd()); // remove the spaces from end



// ----------------With argumants----------------
// 1. Includes

// const finalmsg = "Hi, I am Rajendra Chaudhary";
// console.log(finalmsg);
// console.log(finalmsg.includes()); // false
// console.log(finalmsg.includes("am")); // true -->> because the am string is present in this string
// console.log(finalmsg.includes("the")); // false -->> because "the" -> is not presence


//2 ---------- indexOf() ------------

// const finalmsg = "Hi, I am Rajendra Chaudhary";

// console.log(finalmsg.indexOf("I")); // 4 // if the character is not presence then the result => -1 (ans).
// console.log(finalmsg.indexOf("am")) // give the index of a
// console.log(finalmsg.indexOf('raj')) //#String is not present in the => finalmsg


// 3. ------------replace()  and replaceAll()--------------

// const finalmsg = "Hi, I am Rajendra Chaudhary";
// console.log(finalmsg);
// console.log(finalmsg.replace("Hi", "Hello")); // Hi -->> Hello
// console.log(finalmsg.replace("Bye", "Hello")); // No change because by is not presence
// console.log(finalmsg.replaceAll("a", "A")); // a -->> A over a whole string


// 4. ------------Concat()-------------

// const msg = "Hello world!";
// const msg2 = "My nmae is Rajendra";
// console.log(msg);
// console.log(msg2);
// console.log(msg + " " + msg2);
// console.log(msg.concat(' ', msg2));


// 5. -------------padStart() & padEnd()-------------------
// const lastfourDigits = '7856';
// console.log(lastfourDigits.padStart(16, "*")); // 16 ->  total digits 
// console.log(lastfourDigits.padEnd("16", "*")); // 16 -> total digits 




// 6. -------------charAt()-----------

// const names = "My name is Anurag";
// console.log(names.charAt(4)); // a
// console.log(names[4]); // a both are same



// 7. -----------charCodeAt()------------------
// const names = "My name is Anurag";
// console.log(names.charCodeAt(4)); // ascii value -->> output ->> 97
// console.log(names.charCodeAt()); // bydefault take 0 index value ascii value
// // M ascii value -->> 77




//8. -------------split---------------
//  const n = "My name is Rajendra Chaudhary";
//  console.log(n);
//  console.log(n.split(' ')); // split with space 
//  console.log(n.split('a')); //Splite when a occurance => a removed







// -----------------Template Literals in the Js ---------------------
// TempleteLiteral is introduced in the 2015

// const lastFourDigits = '1234';
// const bankAccount = 122445;

// const templateString  = `Last four digit of my account is ${lastFourDigits}`;
// const templateStrin = `Last four digit of my account is` + " "  + lastFourDigits; // it is not a best method
// const templateStri = `Last four digit of my account is `.concat(lastFourDigits); // it is not a best methos
// const temple2 = `I have $${bankAccount} in my account.`; // $ also show

// console.log(templateString);
// console.log(templateStrin);
// console.log(templateStri);
// console.log(temple2);  
