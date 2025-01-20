const h1 = document.querySelector('h1');
const container = document.querySelector(".container");
const card = document.querySelector(".card");
console.log(container.appendChild(h1)); // h1 is append in the container

container.append(h1.cloneNode(true)); // in console // give the h1 + its text


for(let i=2; i<=10; i++) {
    const newCard = card.cloneNode()
    newCard.innerText = i;
    container.appendChild(newCard);
}


