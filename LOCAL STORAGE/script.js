// LocalStorage -> Store ==>> Key : value


const button = document.querySelector("#click");
const uname = document.querySelector("#username");
const names = document.querySelector("#name");

button.addEventListener("click", () => {
    const value = uname.value;
    localStorage.setItem("name", value); // kay : value
});


window.addEventListener("load", () => {
   const value = localStorage.getItem("name");
   names.innerText = value;
})

