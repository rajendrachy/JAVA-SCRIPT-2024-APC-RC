const result = document.querySelector('#show');
result.addEventListener('click', function() {
   const passIn = document.querySelector('#password');

   if(this.checked) {
    passIn.type = 'text';
   } else {
    passIn.type = 'password';
   }


});


let con = document.querySelector(".con");
let btn = document.querySelector("#btn");
let red = document.querySelector("#red");
btn.addEventListener("click", function() {
   con.innerText = "My name is Rajendra Chaudhary"
   con.style.fontSize = "40px";

});


red.addEventListener("click", function() {
   con.textContent = "My name is Rajendra Chaudhary"
   con.style.color = "red";
})








// const result = document.querySelector('#show');
// result.addEventListener('click', () => {
//    const passIn = document.querySelector('#password');
//    passIn.type = result.checked ? 'text' : 'password';
// });


