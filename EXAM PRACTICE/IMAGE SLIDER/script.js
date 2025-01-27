const slider = document.querySelector('.slider');
const imageElement = document.getElementById('image');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const images = [
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg',
    'https://st3.depositphotos.com/1000560/16638/i/450/depositphotos_166383516-stock-photo-plitvice-lakes-national-park-in.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cu1xxeVjstw8DwlaYEU7K5AU48TU14Q4zlRI0jfAp1ZqHdicsj2ALgdaXn0kfl95TOA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEANvTA831c5GqRIex-opmDX3VyI--OQc8EnOdw1q4_fZqCNXnWKXKhz9KyMQC1q4nYZM&usqp=CAU'
  ];
  

//   let currentImage = 0;
  
//   const updateImage = (step) => {
//     currentImage = (currentImage + step + images.length) % images.length;
//     imageElement.src = images[currentImage];
//   };
  

//  leftArrow.onclick = () => {
//     updateImage(-1);
// }
//  rightArrow.onclick = () => {
//     updateImage(1);
//  }
  
// imageElement.src = images[currentImage];
  


let currentImage = 0;

const updateImage = (step) => {
   currentImage = (currentImage+step+images.length)%images.length;
   imageElement.src = images[currentImage];
};

leftArrow.addEventListener("click", () => {
  updateImage(-1);
});

rightArrow.addEventListener("click", () => {
  updateImage(1);
})
imageElement.src = images[currentImage];

