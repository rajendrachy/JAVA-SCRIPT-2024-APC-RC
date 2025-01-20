// EP - 69

// we can't use single code in the JSON file it gives an error
// const user = {   
//     "userId": 1, // Key : value 
//     "id": 1, // In JSON we must use double code " " in the every Key & value it is rule in JSON
//     "title": "delectus aut autem",
//     "completed": false // last comma is not allowed but in JS last comma is allowed
//   }



//________START_______
// let userData;
// // VISTI jsonplaceholder website

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json =>  {
//         console.log("Got the data");
//         console.log(json)
//         userData = json
//       })
//     // GET request
//       // watch ep-> 69  time: 29:25 sec
// // GET request -> data maganea k liya from backend
// // POST request -> To create
// // PUT AND PATCH -> To Modify something




// _________GET Request____________
// _____DOG API________

const image = document.querySelector('img')
const button = document.querySelector('button')
// fetch('https://dog.ceo/api/breeds/image/random')
//      .then(response => response.json())
//        .then(json =>  {
//         //  console.log("Got the data");
//         //  console.log(json.message)
//          image.src =  json.message
//        })


button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      //  console.log("Got the data");
      //  console.log(response.json)
       console.log(json.message)
      image.src = json.message
    })
})







