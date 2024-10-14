const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
//start----------
// __________click________________
let count = 0

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });


//________Mouse-Down___________

// card.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });



//________Mouse-up________

// card.addEventListener('mouseup', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });



//_____________Mouse-enter_____________

// card.addEventListener('mouseenter', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });


//__________Mouse-Leave_________

// card.addEventListener('mouseleave', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });



//___________Mouse-move__________
// card.addEventListener('mousemove', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });


//____________Mouse-over___________ // it print while enter in the child of it also 
//diff->mouseover & mouseenter => mouse over print while enter in the child of it div but not in the mouseenter event or a vice-versa 

// card.addEventListener('mouseover', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });


//____________Wheel event_____________ // scrolling with two fingers
// card.addEventListener('wheel', () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
// });

//_____________Touch start and Touch end EVENT______________
// card.addEventListener('touchstart', () => {
//        const newCard = document.createElement('div');
//         newCard.classList.add('card');
//          newCard.innerText = count++;
//          container.append(newCard);
//     });



//__________Touch move___________// drag -> khitcho 
card.addEventListener('touchmove', () => {
      const newCard = document.createElement('div');
   newCard.classList.add('card');
        newCard.innerText = count++;
     container.append(newCard);
 });



 //__________Drag, dragstart, dragend, dragup, dragdown_____________ // make in the h1 -> in the html also
 //drag event is not used in the mobile device
// mousemove event
//  h1.addEventListener('drag', () => {
//         const newCard = document.createElement('div');
//         newCard.classList.add('card');
//         newCard.innerText = count++;
//         container.append(newCard);
//      });




//__________Pointer Move-> work as mousemove && touchmove______________
card.addEventListener('pointermove', () => {
     const newCard = document.createElement('div');
        newCard.classList.add('card');
     newCard.innerText = count++;
     container.append(newCard);
 });


