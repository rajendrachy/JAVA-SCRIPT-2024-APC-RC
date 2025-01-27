const apiKey = "265894777c7cef2467c8a451a95ec0f3";
const searchButton = document.querySelector(".search button");
const searchBar = document.querySelector(".search-bar");

const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const { name, weather, main, wind } = data;
      document.querySelector(".city").innerText = `${name}`;
      document.querySelector(".descript").innerText = `Weather: ${weather[0].description}`;
      document.querySelector(".temp").innerText = `Temp: ${main.temp}°C`;
      document.querySelector(".humidit").innerText = `Humidity: ${main.humidity}%`;
      document.querySelector(".wind").innerText = `Wind speed: ${wind.speed} km/h`;
      document.querySelector(".weather").classList.remove("loading");
      // document.body.style.backgroundImage.src = `https://source.unsplash.com/1600x900/?${name}`;

      // Save the city to local storage
      localStorage.setItem("lastCity", name);

    });
};




// Fetch weather on button click
searchButton.addEventListener("click", () => {
  fetchWeather(searchBar.value);
});



// Initial weather fetch for a default city
fetchWeather("Nepal");


// // Fetch weather on Enter key press
// // searchBar.addEventListener("keyup", (event) => {
// //   if (event.key === "Enter") {
// //     fetchWeather(searchBar.value);
// //   }
// // });







