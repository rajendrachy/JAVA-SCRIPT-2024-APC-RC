// const userInput = document.querySelector('#username');

// userInput.addEventListener('click', () => {
//  console.log("input clicked");
// });


// userInput.addEventListener('dblclick', () => {
//     console.log("Input Double Clicked");
//    });


//___________INPUT______________

// userInput.addEventListener('input', () => {
//     console.log("input event fired");  
// });


// const usernameInput = document.querySelector('#username');
// usernameInput.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });


// const userInput = document.querySelector('#username');
// const paragraph = document.querySelector('p');
// userInput.addEventListener('input', (e) => {
//        console.log(e.target.value);
//        paragraph.innerText = e.target.value;
// });



// //________Change Event__________

// const userInput = document.querySelector('#username');
// const paragraph = document.querySelector('p');
// userInput.addEventListener('change', (e) => {
//        console.log(e.target.value);
//        paragraph.innerText = e.target.value;
// });



//_______Focus Event________ under input field click

// const userInput = document.querySelector('#username');
// const paragraph = document.querySelector('p');
// userInput.addEventListener('focus', (e) => {
//        console.log(e.target.value);
//        paragraph.innerText = e.target.value;
// });


//_______Blur________outside input field click

// const userInput = document.querySelector('#username');
// const paragraph = document.querySelector('p');
// userInput.addEventListener('blur', (e) => {
//        console.log(e.target.value);
//        paragraph.innerText = e.target.value;
// });




//__________Form_________

// const form = document.querySelector('form');
//_______click________
// form.addEventListener('click', (e) => {
//        console.log(e)
// });

//---------submit-----------
// form.addEventListener('submit', (e) => {
//        console.log(e)
// });


//_________Submit______________
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//        e.preventDefault();
//        const myFormData = new FormData(form);
//        // console.log(myFormData);


// // console.log(myFormData.entries());
//      for(const p of myFormData.entries()) {
//         console.log(p);
//      }
// });






const form = document.querySelector('form');
form.addEventListener('click', (e) => {
       e.preventDefault();
       // console.log(e.target); // print where we clicked
       console.log(e.currentTarget); // print only a form i.e form
       console.log('Form clicked');
});



