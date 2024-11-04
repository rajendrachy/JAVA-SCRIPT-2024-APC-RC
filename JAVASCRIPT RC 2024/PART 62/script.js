const image = document.querySelector('img');
const button = document.querySelector('button');


button.addEventListener('click', () => {
   const xhr = new XMLHttpRequest()
   console.log(xhr);

    
   xhr.responseType = 'json'; // Object type response without using a JSON.parse 

   xhr.addEventListener('load', () => {
    // console.log(xhr.response);
    image.src = xhr.response.message;
   })


   xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
   xhr.send();
   
})



// function sayHi() {
//     console.log('say Hi');
// }




