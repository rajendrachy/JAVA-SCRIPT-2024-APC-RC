
// let att = document.querySelector('[procodrr = "akash"]');
// console.log(att);
// //console.dir(att); // print in the form og the object

// const attr = document.querySelector('[procodrr]').attributes.procodrr;
// console.log(attr);

// const atr = document.querySelector('[procodrr]').attributes.procodrr.value; //anurag
// console.log(atr);


//________________Get Attribute__________________-

// const getat = document.querySelector('[procodrr]').getAttribute('procodrr');
//console.log(getat); // anurag //attribute :value

// _________if value is not present_________
// const getat = document.querySelector('[procodrr]').getAttribute('hellow');
// console.log(getat); // null




// const heading = document.querySelector('h1').getAttribute('class');
// console.log(heading); // css-image -> value





// ________________________Set Attribute____________________
// const setat = document.querySelector('h1').setAttribute('title', 'Hello-world'); // we have to set attribute and its value -> attribute : value 
// console.log(setat);



const id = document.querySelector('h1').setAttribute('id', 'heading');
console.log(id);


//or, directly
const ids = document.querySelector('h1').id;
console.log(ids);

document.querySelector('h1').id = 'man'; // we can change the value of the id directly 