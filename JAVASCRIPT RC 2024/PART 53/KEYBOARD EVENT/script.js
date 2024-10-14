//Ep- 63
// keyboard Event -> three types
//1. key up
//2. key down
//3. key press




//________________Keypress_______________ // all the key is not workign like shift, control
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
// h1.addEventListener('keypress', (e) => {
//     console.log(e);
// })

// h1.addEventListener('keypress', (e) => {
//     // console.log(e); // all print
//     console.log('key code:', e.code);
//     console.log('key Value:', e.key); // only the key is print

// })



// // _____________Key up______________ // all the key is print

// h1.addEventListener('keyup', (e) => {
//     // console.log(e); // all print
//     console.log('key code:', e.code);
//     console.log('key Value:', e.key); // only the key is print

// })




// _____________Key down______________

h1.addEventListener('keydown', (e) => {
    // console.log(e); // all print
    console.log('key code:', e.code);
    console.log('key Value:', e.key); // only the key is print

})