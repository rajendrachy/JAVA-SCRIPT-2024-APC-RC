// Condition for the append element 
// ------The append element should not be Parent-------- 


// const h1 = document.querySelector('h1');
// const container = document.querySelector(".container");



// const firtsimg = document.querySelector('img');
// for(i=2; i<100; i++) {
//     const newImg = firtsimg.cloneNode();
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.appendChild(newImg);
// }





// All using a js

// __________Create element__________________________
// const p = document.createElement('p');
// p.id = 'hiii';
// p.innerText = "This is a Paragraph";
// p.classList.add('my-para'); // create a class
// container.appendChild(p);





// ______________Create a Image______________________

// const container = document.querySelector(".container");
// const image = document.createElement('img');
// image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`; // `` -> string templete literal
// container.append(image);




// _____Using for Loop______
const container = document.querySelector(".container");
// const image = document.createElement('img');
for(let i=2; i<=100; i++) {
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`; // pockmans
    container.append(image);
}





