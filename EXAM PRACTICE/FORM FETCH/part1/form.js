let name = document.querySelector("#name");
let id = document.querySelector("#ids");

let tbody = document.querySelector("#t-body");
let btn = document.querySelector("#btn");


btn.addEventListener("click", function (e) {
    e.preventDefault();

    let genders = document.getElementsByName("gender");
    let gender = "Not Specified";

    genders.forEach((radio) => {
        if (radio.checked) {
            gender = radio.value;
        }
    });


    let row = document.createElement("tr");


    row.innerHTML = `
          <td>${name.value}</td>
          <td>${id.value}</td>
          <td>${gender}</td>
   `;

   tbody.appendChild(row);
   name.value = "";
   id.value = "";
   gender = "";
   radio.value = "";

});