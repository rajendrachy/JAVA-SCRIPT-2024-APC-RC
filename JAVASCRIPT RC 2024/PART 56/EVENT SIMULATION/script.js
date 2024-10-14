const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input');
const form = document.querySelector('form');

// let count = 1

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// for(let i=1; i<=100; i++) {
//   addCardBtn.click();
// }  
// or, using a setInterval

// setInterval( () => {
// addCardBtn.click();
// }, 1000); // 1 second



// ______________SetTimeOut______________
// ------click event----------
// const intervalId = setInterval( () => {
//     if(count > 10) { // up to one more 11
//         clearInterval(intervalId);
//     }
//  addCardBtn.click();
//  }, 1000);


// ___________Focus_____________

// input.focus(); // while relode the input filed is on the focus

// setTimeout(() => {
//     input.focus();
//     console.log("Input focused");
// }, 2000) // after 2 seconds the input field in on the focus

// setTimeout(() => {
//     input.blur();
//     console.log("input Blur");
// }, 4000) // after 4 second 



// _________Submit_____________
// form.submit();

// setTimeout(() => {
//     form.submit()
//     console.log('form is submit');
// }, 3000);


//___________Reset________
setTimeout(() => {
    form.reset();
    console.log("Form is reset");
}, 2000);