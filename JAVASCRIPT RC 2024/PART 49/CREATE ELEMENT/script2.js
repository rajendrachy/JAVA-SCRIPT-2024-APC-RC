// const container = document.querySelector(".container");
// const imageContainer = document.createElement('div');
// imageContainer.classList.add('img-container');

// const newImage = document.createElement('img');
// newImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

// const paragraph = document.createElement('p');
// paragraph.innerText = 10;


// imageContainer.append(newImage); // append using a comman  // imageContainer.append(newImage, paragraph);
// imageContainer.append(paragraph);
// container.append(imageContainer);



// _______using a for-Loop____________
// const container = document.querySelector(".container");
// for(let i=1; i<=100; i++) {
//     const imageContainer = document.createElement('div');
//      imageContainer.classList.add('img-container');
    
//      const newImage = document.createElement('img');
//      newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    
//      const paragraph = document.createElement('p');
//      paragraph.innerText = i;
    
    
//      imageContainer.append(newImage); // append using a comman  // imageContainer.append(newImage, paragraph);
//      imageContainer.append(paragraph);
//      container.append(imageContainer);
    
// }



//_______OR______ShortCut
// const container = document.querySelector(".container");
// for(let i=1; i<=100; i++) {
//     const imageContainer = document.createElement('div');
//      imageContainer.classList.add('img-container');

//      const myHtml = `
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//      <p>${i}</p>
//      `
//      imageContainer.innerHTML = myHtml;
//      container.append(imageContainer);
// }


// _________OR_______// using a empty string
const container = document.querySelector(".container");
let myHtml = ``
for(let i=1; i<=100; i++) {
    myHtml += `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
        <p>${i}</p>
      </div>
    `
}
container.innerHTML = myHtml;