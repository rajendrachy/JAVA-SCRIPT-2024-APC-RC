let container = document.querySelector(".container");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");



window.addEventListener("load", () => {
  container.style.display = "none";
})


remove.addEventListener("click", () => {
     container.style.display = "none";
});


add.addEventListener("click", () => {
    container.style.display = "block";
    let newContainer = document.createElement("div");
    newContainer.className = "container";
    newContainer.textContent = "New Container";
    newContainer.style.display = "flex";
    newContainer.style.justifyContent = "row";
    container.appendChild(newContainer);
});

