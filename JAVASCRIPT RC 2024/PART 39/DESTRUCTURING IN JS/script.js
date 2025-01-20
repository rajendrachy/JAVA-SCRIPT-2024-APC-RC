// // Ep - 49
// // ______________ARRAY - Destructuring___________________
// const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white']

// // const color1 = colors[0]
// // const color2 = colors[1]
// // const color3 = colors[2]
// // console.log(color1);


//  //const [color1, color2, color3] = colors

//  const [,,,color4] = colors
//  console.log(color4);
// // const { 3: color4, 5: color5 } = colors



// // _________________OBJECT______________
const user = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
}
// // const {name, age} = user; // Destructuring
// // const {name: username, age : userage} = user; // create a new variable of its

// const {address: {city}} = user;



// function intro(userObj) {
//   console.log(userObj);
// }
// intro(user);




function intro({name}) {
   console.log(name); // 25 from the objects
 }
 intro(user);

