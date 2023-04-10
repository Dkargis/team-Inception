// Created variables for the weather API key, the NPS API key, and the elements for the dropdown menu
var APIkeyopenweather = "2b43e2e1e9e4752f4b3c2320f365c4f8";
var APIkeyNPS = "xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg";
var NationalParkDropdownEl = document.querySelector(".National-Park-Div");

var parkSelectEl = document.getElementById("Park-Dropdown");
var trailSelectEl = document.getElementById("Trail-Dropdown");
var parkSubmit = document.querySelector("#Park-Submit-Button");
var trailSubmit = document.querySelector("#Trail-Submit-Button");
var clearButton = document.querySelector("#Clear-Favorites-Button");

var FavoritesBTN = document.getElementById("Favorites-BTN");
var FavoritesListEl = document.getElementById("Favorites");
var fivedayforecast1El = document.getElementById("fivedayforecast1");
var fivedayforecast2El = document.getElementById("fivedayforecast2");
var fivedayforecast3El = document.getElementById("fivedayforecast3");
var fivedayforecast4El = document.getElementById("fivedayforecast4");
var fivedayforecast5El = document.getElementById("fivedayforecast5");
var favoritesArrayEl = [];

// The following arrays contain the longitudes and latituds for Utah's National Parks.
// Index Key: 0 = Zion, 1 = Bryce Canyon, 2 = Arches, 3 = Canyonlands, 4 = Capitol Reef
var FiveDayForecastEl = document.getElementById("Five-Day-Forecast");
var weatherURL;
var NPStrailsURL;

// function to grab the 5 day forecast for the national park that is selected
function getWeatherparks(weatherURL) 
{
  fetch(weatherURL)
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    $(".weathercard").empty();
      // Created variables for name of park, date, weather icon, temperature, humidity, wind speed, and UV index to grab a 5 day forecast
      var date = data.list[0].dt_txt;
      date= date.split(" ");
      date= date[0];
      var weatherIcon = data.list[0].weather[0].icon;
      var temperature = data.list[0].main.temp;
      temperature = (temperature - 273.15) * 1.80 + 32;
      temperature = Math.round(temperature);
      var humidity = data.list[0].main.humidity;
      var windSpeed = data.list[0].wind.speed;
      windSpeed = Math.round(windSpeed);

      var dateEl = document.createElement("p");
      dateEl.textContent = date;
      fivedayforecast1El.appendChild(dateEl);
      var weatherIconEl = document.createElement("img");
      weatherIconEl.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon + ".png");
      fivedayforecast1El.appendChild(weatherIconEl);
      var temperatureEl = document.createElement("p");
      temperatureEl.textContent = "Temperature: " + temperature + "°F";
      fivedayforecast1El.appendChild(temperatureEl);
      var humidityEl = document.createElement("p");
      humidityEl.textContent = "Humidity: " + humidity + "%";
      fivedayforecast1El.appendChild(humidityEl);
      var windSpeedEl = document.createElement("p");
      windSpeedEl.textContent = "Wind Speed: " + windSpeed + " MPH";
      fivedayforecast1El.appendChild(windSpeedEl);
      fivedayforecast1El.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10%; margin: 10%;");

      // Created variables for day 2 of the 5 day forecast
      var date2 = data.list[8].dt_txt;
      date2 = date2.split(" ");
      date2 = date2[0];
      var weatherIcon2 = data.list[8].weather[0].icon;
      var temperature2 = data.list[8].main.temp;
      temperature2 = (temperature2 - 273.15) * 1.80 + 32;
      temperature2 = Math.round(temperature2);
      var humidity2 = data.list[8].main.humidity;
      var windSpeed2 = data.list[8].wind.speed;
      windSpeed2 = Math.round(windSpeed2);

      // Created elements to display day 2 of the 5 day forecast
      var date2El = document.createElement("p");
      date2El.textContent = date2;
      fivedayforecast2El.appendChild(date2El);
      var weatherIcon2El = document.createElement("img");
      weatherIcon2El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon2 + ".png");
      fivedayforecast2El.appendChild(weatherIcon2El);
      var temperature2El = document.createElement("p");
      temperature2El.textContent = "Temperature: " + temperature2 + "°F";
      fivedayforecast2El.appendChild(temperature2El);
      var humidity2El = document.createElement("p");
      humidity2El.textContent = "Humidity: " + humidity2 + "%";
      fivedayforecast2El.appendChild(humidity2El);
      var windSpeed2El = document.createElement("p");
      windSpeed2El.textContent = "Wind Speed: " + windSpeed2 + " MPH";
      fivedayforecast2El.appendChild(windSpeed2El);
      fivedayforecast2El.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10%; margin: 10%;");

      // Created variables for day 3 of the 5 day forecast
      var date3 = data.list[16].dt_txt;
      date3 = date3.split(" ");
      date3 = date3[0];
      var weatherIcon3 = data.list[16].weather[0].icon;
      var temperature3 = data.list[16].main.temp;
      temperature3 = (temperature3 - 273.15) * 1.80 + 32;
      temperature3 = Math.round(temperature3);
      var humidity3 = data.list[16].main.humidity;
      var windSpeed3 = data.list[16].wind.speed;
      windSpeed3 = Math.round(windSpeed3);

      // Created elements to display day 3 of 5 day forecast
      var date3El = document.createElement("p");
      date3El.textContent = date3;
      fivedayforecast3El.appendChild(date3El);
      var weatherIcon3El = document.createElement("img");
      weatherIcon3El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon3 + ".png");
      fivedayforecast3El.appendChild(weatherIcon3El);
      var temperature3El = document.createElement("p");
      temperature3El.textContent = "Temperature: " + temperature3 + "°F";
      fivedayforecast3El.appendChild(temperature3El);
      var humidity3El = document.createElement("p");
      humidity3El.textContent = "Humidity: " + humidity3 + "%";
      fivedayforecast3El.appendChild(humidity3El);
      var windSpeed3El = document.createElement("p");
      windSpeed3El.textContent = "Wind Speed: " + windSpeed3 + " MPH";
      fivedayforecast3El.appendChild(windSpeed3El);
      fivedayforecast3El.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10%; margin: 10%;");

      // Created variables for day 4 of the 5 day forecast
      var date4 = data.list[24].dt_txt;
      date4 = date4.split(" ");
      date4 = date4[0];
      var weatherIcon4 = data.list[24].weather[0].icon;
      var temperature4 = data.list[24].main.temp;
      temperature4 = (temperature4 - 273.15) * 1.80 + 32;
      temperature4 = Math.round(temperature4);
      var humidity4 = data.list[24].main.humidity;
      var windSpeed4 = data.list[24].wind.speed;
      windSpeed4 = Math.round(windSpeed4);

      // Created elements to display day 4 of 5 day forecast
      var date4El = document.createElement("p");
      date4El.textContent = date4;
      fivedayforecast4El.appendChild(date4El);
      var weatherIcon4El = document.createElement("img");
      weatherIcon4El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon4 + ".png");
      fivedayforecast4El.appendChild(weatherIcon4El);
      var temperature4El = document.createElement("p");
      temperature4El.textContent = "Temperature: " + temperature4 + "°F";
      fivedayforecast4El.appendChild(temperature4El);
      var humidity4El = document.createElement("p");
      humidity4El.textContent = "Humidity: " + humidity4 + "%";
      fivedayforecast4El.appendChild(humidity4El);
      var windSpeed4El = document.createElement("p");
      windSpeed4El.textContent = "Wind Speed: " + windSpeed4 + " MPH";
      fivedayforecast4El.appendChild(windSpeed4El);
      fivedayforecast4El.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10%; margin: 10%;");

      // Created variables for day 5 of the 5 day forecast
      var date5 = data.list[32].dt_txt;
      date5 = date5.split(" ");
      date5 = date5[0];
      var weatherIcon5 = data.list[32].weather[0].icon;
      var temperature5 = data.list[32].main.temp;
      temperature5 = (temperature5 - 273.15) * 1.80 + 32;
      temperature5 = Math.round(temperature5);
      var humidity5 = data.list[32].main.humidity;
      var windSpeed5 = data.list[32].wind.speed;
      windSpeed5 = Math.round(windSpeed5);

      // Created elements to display day 5 of 5 day forecast
      var date5El = document.createElement("p");
      date5El.textContent = date5;
      fivedayforecast5El.appendChild(date5El);
      var weatherIcon5El = document.createElement("img");
      weatherIcon5El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon5 + ".png");
      fivedayforecast5El.appendChild(weatherIcon5El);
      var temperature5El = document.createElement("p");
      temperature5El.textContent = "Temperature: " + temperature5 + "°F";
      fivedayforecast5El.appendChild(temperature5El);
      var humidity5El = document.createElement("p");
      humidity5El.textContent = "Humidity: " + humidity5 + "%";
      fivedayforecast5El.appendChild(humidity5El);
      var windSpeed5El = document.createElement("p");
      windSpeed5El.textContent = "Wind Speed: " + windSpeed5 + " MPH";
      fivedayforecast5El.appendChild(windSpeed5El);
      fivedayforecast5El.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10%; margin: 10%;");
  })     
  };

// This function will make it so when you click the favorites button it will add what is in local storage to the favorites list as an option
function addFavorite(favoriteName) 
{
  var favorite = document.createElement("option");
  favorite.textContent = favoriteName;
  favorite.setAttribute("value", favoriteName);
  favorite.setAttribute("class", "Favorite-Option");
  favorite.setAttribute("id", "Favorite-Option");
  favorite.setAttribute("style", "background-color: rgb(60, 204, 253); border: 1px solid black; border-radius: 5px; padding: 10px; margin: 10px;");
  FavoritesListEl.appendChild(favorite);
}

/* 
  Gets the selected trails for the selected national park and adds them to the dropdown.
  Displays the selected trail to the user and its info.
*/
function getNPStrails(trailFetchURL) 
{
  fetch(trailFetchURL)
    .then(function(response) {
      return response.json();
   })
  .then (function(data) {
    var selectedTrail;
    for(let i = 0; i < data.data[0][0].parks[0].places.length; i++)
    {
      let trail = document.createElement("option");
      trail.setAttribute("class", "Trail-Option");
      trail.setAttribute("id", "Option-" + i);
      trail.textContent = data.data[0][0].parks[0].places[i].title;
      document.getElementById("Trail-Dropdown").appendChild(trail);
    }

    // Grabs the user input from the trail dropdown and displays its info.
    trailSubmit.addEventListener("click", function(event) {
      event.preventDefault();
      selectedTrail = trailSelectEl.options[trailSelectEl.selectedIndex].value;

      // Parse JSON file to find trail info.
      for(let i = 0; i < data.data[0][0].parks[0].places.length; i++)
      {
        if (data.data[0][0].parks[0].places[i].title === selectedTrail) {
          var trailURL = data.data[0][0].parks[0].places[i].url;
          document.getElementById("Trail-Header").textContent = selectedTrail;
          document.getElementById("Trail-URL").href = trailURL;
          document.getElementById("Trail-URL").textContent = trailURL;
          break;
        }
      }
    });

    // Created an event listener for the favorites button to save the trail to local storage
    FavoritesBTN.addEventListener("click", function(event) {
      event.preventDefault();
      if (favoritesArrayEl === null) {
        favoritesArrayEl = [];
      }
      if (favoritesArrayEl.includes(selectedTrail) === false) {
        favoritesArrayEl.push(selectedTrail);
        localStorage.setItem("favArray", JSON.stringify(favoritesArrayEl));
        var favoriteName = selectedTrail;
        addFavorite(favoriteName);
      }
    });
  })

  .catch(function(error) {
  console.log(error)
  })
}

// Grabs favorites from local storage when page is loaded.
function getFavorites()
{
  favoritesArrayEl = JSON.parse(localStorage.getItem("favArray"));
  if (favoritesArrayEl !== null) {
      for(let i = 0; i < favoritesArrayEl.length; i++)
    {
      addFavorite(favoritesArrayEl[i]);
    }
  }
}

getFavorites();

// Grabs the user input from the park dropdown.
parkSubmit.addEventListener("click", function(event) {
  event.preventDefault();
  $("#Trail-Dropdown").empty();
  selectedPark = parkSelectEl.options[parkSelectEl.selectedIndex].value;
  var lat =   [37.2982, 37.5930, 38.7331, 38.2136, 38.0877]
  var lon = [-113.0263, -112.1871, -109.5925, -109.9025, -111.1355]
  if (selectedPark === "Zion National Park") {
    var latitude = lat[0];
    var longitude =lon[0];
    document.getElementById("Park-Header").innerText = selectedPark;
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkeyopenweather;
    getWeatherparks(weatherURL);
    NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "zion"
    getNPStrails(NPStrailsURL);
  } 
  if (selectedPark === "Bryce Canyon National Park") {
    var latitude = lat[1];
    var longitude =lon[1];
    document.getElementById("Park-Header").innerText = selectedPark;
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkeyopenweather;
    getWeatherparks(weatherURL);
    NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "brca"
    getNPStrails(NPStrailsURL);
  }
  if (selectedPark=== "Arches National Park") {
    var latitude = lat[2];
    var longitude =lon[2];
    document.getElementById("Park-Header").innerText = selectedPark;
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkeyopenweather;
    getWeatherparks(weatherURL);
    NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "arch"
    getNPStrails(NPStrailsURL);
  }
  if (selectedPark === "Canyonlands National Park") {
    var latitude = lat[3];
    var longitude =lon[3];
    document.getElementById("Park-Header").innerText = selectedPark;
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkeyopenweather;
    getWeatherparks(weatherURL);
    NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "cany"
    getNPStrails(NPStrailsURL);
  }
  if (selectedPark === "Capitol Reef National Park") {
    var latitude = lat[4];
    var longitude =lon[4];
    document.getElementById("Park-Header").innerText = selectedPark;
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkeyopenweather;
    getWeatherparks(weatherURL);
  }
});

// Creates clear button that clears favorites list.
clearButton.addEventListener("click", function(event) {
  event.preventDefault();
  $("#Favorites").empty();
  favoritesArrayEl = [];
});


  
