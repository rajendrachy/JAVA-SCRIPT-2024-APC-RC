// console.log(localStorage); // while reloading the input value is not delete 
// console.log(sessionStorage);
const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

// nameElement.innerText = localStorage.name;
// nameInput.addEventListener('input', (e) => {
//     localStorage.name = e.target.value;
//     nameElement.innerText = localStorage.name;
// })


// or, -----
// nameElement.innerText = localStorage.getItem('name');
// nameInput.addEventListener('input', (e) => {
//      localStorage.setItem('name', e.target.value);
//      nameElement.innerText = localStorage.getItem('name');
//  })


 // difference localstrage // only one difference this is -->> 
//  localStorage.getItem('age'); // null
//  localStorage.age // undefined


// _________In local storage only the string and objects are stored__________________________



// ________________________

// ageElement.innerText = localStorage.getItem('Age');
// ageInput.addEventListener('input', (e) => {
//      localStorage.setItem('Age', e.target.value);
//      ageElement.innerText = localStorage.getItem('Age');
//  })



// ________Name Input add a event Listener 


const myData = JSON.parse(localStorage.getItem('myData')) || {}; // empty object created // .getitem -> access

nameInput.addEventListener('input', (e) => {
   myData.name = e.target.value;
   localStorage.setItem('myData', JSON.stringify(myData));
   nameElement.innerText = e.target.value;
});

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData)); // set item
    age.innerText = e.target.value;

 });
 nameElement.innerText = myData.name;
 ageElement.innerText = myData.age;


// JSON.stringify(myData) // convert a object into a string in the javascript
// JSON.parse("myName":"","age":"","name":"rajendra") // to convert a strin into again a objects

localStorage.clear() // all the data clear from a localstorage
localStorage.removeItem('name') // key : -->> only one delete



