// // 1. ______________________document.getElementsByTagName()_____________________

// let tagImg = document.getElementsByTagName('img'); // all images selected
// console.log(tagImg);
// let tagP = document.getElementsByTagName('p')[0]; // first paragraph selected
// console.log(tagP);
// let heading = document.getElementsByTagName('h2')[0].innerText; // Heading 2
// console.log(heading);



//2. _____________document.getElementByClassName()__________________________

// const cssImg = document.getElementsByClassName('css-image')[0];
// console.log(cssImg);




//3. ___________document.getElementById()____________________

// const csImg = document.getElementById('css-image'); // give only one first id result in console
// console.log(csImg);



//4. ____________document.querySelector()____________________

 // classSelection -->> (.)
// const cssImg = document.querySelector('.css-image'); // which element find first then this is the output of this 
// console.log(cssImg); // return first class in the html => only the first element
//  // Idselection -> (#)


 // 5.________________document.querySelectorAll()_______________________

// const cssImg = document.querySelectorAll('#css-image');
// console.log(cssImg);
// const jssImg = document.querySelector('.a');
// jsImg.src = 'URl'; // change the image
// console.log(jssImg); // null because 'a' is not a class Name



// _____________Nested Selector______________
// const li = document.querySelector('ul li'); // select ul, li -> first li under the ul
// console.log(li);


// ____________________Updating all the Images____________________

const allImages = document.querySelectorAll('img');
const imagesUrl = [
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93ninT4YOJq7Q-mEX5vUscnfPx3pynwF2m0Egh-j--UBdB68TUMb02gWCECXhouil3jI&usqp=CAU',
]
// console.log(allImages);
// __________using Simple Way________________
//  allImages[0].src = imagesUrl[0];
//  allImages[1].src = imagesUrl[1];
//  allImages[2].src = imagesUrl[2];

//-------------using a for loop-------------------
// for(let i=0; i<allImages.length; i++) {
//     allImages[i].src = imagesUrl[i];
// }



// ____________using forEach Loop___________________
allImages.forEach((image, i) => { // forEach loop is used in the array or in Nodes  not used in the HTML collection
    image.src = imagesUrl[i];
})



