// EP - 71
//AJAX -> Asynchronous javascript and Xml

//asynchronous -> Not run line by line -> Code
// synchronous -> Run Line by line -> Code
// by default the API is asynchronous

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



setTimeout(() => {
    console.log('hiii');
}, 4000)



// const blockingBtn = document.querySelector('.blocking-btn')

// blockingBtn.addEventListener('click', () => {
//     const startTime = Date.now()
//     let currentTime = startTime

//     while (startTime + 4000 > currentTime) {
//         currentTime = Date.now()
//     }
// })






