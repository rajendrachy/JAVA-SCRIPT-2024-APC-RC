// // Ep - 55
// const h1 = document.querySelector('h1');
// console.log(h1);



// const h1 = document.querySelector('h1');
// h1.style.backgroundColor = "pink"; // More priority than CSS style
// h1.style.color = 'black';



// const allLinks = document.querySelectorAll('a');
// for(let i=0; i<allLinks.length; i++) {
//     allLinks[i].style.color = 'goldenrod';

// }


for(let link of allLinks) {
//     link.style.color = 'red';
//     link.style.textDecoration = 'none';
//     link.style.fontWeight = 'bold'; //700
//     link.style.fontFamily = 'cursive'; 

// or, 


    // link.style.cssText = 
    // `
    // color : teal;
    // font-size: 18px;
    //  font-family: cursive;
    //  font-weight: 700;
    //  text-decoration-line: none;
    //  `



    // or


    link.className = 'green-link';
    link.setAttribute('class', 'green-link');



    // link.className = 'wivy-link';
    // link.className = 'my-link';

    // console.log(link.classList);
    // document.querySelector('#hii').classList.toggle('test'); // if class found the remove and if there is no class name found with this name then ->> add 



    // link.classList.add('green-link');
    // link.classList.remove('my-link');
}


// document.querySelector('#hii').classList.add('hidden');


