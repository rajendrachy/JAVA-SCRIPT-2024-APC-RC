const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
//__________Event Bubbling______________

// document.body.addEventListener('click', (e)=> {
//     console.log('4. Body event is clicked');
//  })


//  window.addEventListener('click', (e)=> {
//     console.log('5. window event is clicked');
//  })

// green.addEventListener('click', (e)=> {
//    console.log('3. Green event is clicked');
// })

// pink.addEventListener('click', (e) => {
//     console.log("2. pink is clicked");
// })

// blue.addEventListener('click', (e) => {
//     e.stopPropagation(); // use of it is not print all  or, stop event Bubblings
//     console.log("1. Blue is clicked");
// })




//_____________Event Capturing________________


//  window.addEventListener('click', (e)=> {
//     console.log('5. window event is clicked');
//  },{capture: true}); // obj

//  document.body.addEventListener('click', (e)=> {
//     console.log('4. Body event is clicked');
//  },{capture: true});

// green.addEventListener('click', (e)=> {
//    console.log('3. Green event is clicked');
// },{capture: true});

// pink.addEventListener('click', (e) => {
//     console.log("2. pink is clicked");
// },{capture: true});

// blue.addEventListener('click', (e) => {
//     console.log("1. Blue is clicked");
// },{capture: true});



// ------Once: true--------
blue.addEventListener('click', (e) => { 
console.log("1. Blue is clicked");
},{capture: true, once: true}); //  once: true -> only one time print output

// event bubbling -> mid to curner
// event capturing -> cornrt to mid 


