// // Ep - 61

// function sayHi() {
//     console.log('hiiiihelo');
// }

//  function div() {
//     console.log('This is a Box');
//  }

// // const h1 = document.querySelector('h1');
// // h1.onclick = sayHi;


// const h1 = document.querySelector('h1');
// // h1.addEventListener('click', sayHi);
// h1.addEventListener('click', function() {
//   console.log("My Html tag.")
// }) 


// _________Arrow Function_____________
// const card  = document.querySelector('.card');
// card.addEventListener('click', () => {
//     console.log("Hello Rc !");
// });


const container = document.querySelector('.container');
const card  = document.querySelector('.card');

let count = 1;

card.addEventListener('click', () => {
    const newcard = document.createElement('div');
    newcard.classList.add('card');
    container.append(newcard);
    newcard.innerText = count;
    // count  += 1;
    count++;
    console.log(newcard);
})



