// const tbody = document.querySelector('#t-body'); // Select the tbody by ID
// const nameInput = document.querySelector('#name'); // Select the name input
// const degreeInput = document.querySelector('#degree'); // Select the degree input
// const form = document.querySelector('#form1'); // Select the form

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Create a new row and populate it with input values
//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${nameInput.value}</td>
//         <td>${degreeInput.value}</td>
//     `;

//     // Append the row to the tbody
//     tbody.appendChild(row);

//     // Clear the input fields
//     nameInput.value = "";
//     degreeInput.value = "";
// });




// ----------2nd time 

const name = document.querySelector("#name");
const id = document.querySelector("#ids");
const tbody = document.querySelector("#tbody");
const btn = document.querySelector("#btn");


btn.addEventListener("click", function(e) {
 e.preventDefault();


 const row = document.createElement("tr");
 row.innerHTML = `
              <td>${name.value}</td>
              <td>${id.value}</td>
 `;


 tbody.appendChild(row);
 name.value = "";
 id.value = "";
})

