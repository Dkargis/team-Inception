// created a variable to for the weather API key and the NPS API key, and the elements for the dropdown menu
var APIkeyopenweather = "2b43e2e1e9e4752f4b3c2320f365c4f8";
var APIkeyNPS = "xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg";
var NationalParkDropdownEl = document.querySelector(".National-Park-Dropdown");

var parkSelectEl = document.querySelector(".Park-Option");

var ZionEl = document.getElementById("Zion");
var BryceEl = document.getElementById("Bryce");
var ArchesEl = document.getElementById("Arches");
var CanyonlandsEl = document.getElementById("Canyonlands");
var CapitolReefEl = document.getElementById("Capitol-Reef")
var fivedayforecast1El = document.getElementById("fivedayforecast1");
var fivedayforecast2El = document.getElementById("fivedayforecast2");
var fivedayforecast3El = document.getElementById("fivedayforecast3");
var fivedayforecast4El = document.getElementById("fivedayforecast4");
var fivedayforecast5El = document.getElementById("fivedayforecast5");

/*
    The following arrays contain the longitudes and latituds for Utah's National Parks.
    Index Key: 0 = Zion, 1 = Bryce Canyon, 2 = Arches, 3 = Canyonlands, 4 = Capitol Reef
*/
var lat =   [37.2982, 37.5930, 38.7331, 38.2136, 38.0877]
var lon = [-113.0263, -112.1871, -109.5925, -109.9025, -111.1355]
var FiveDayForecastEl = document.getElementById("Five-Day-Forecast");
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkeyopenweather;
var NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "arch,care,zion,cany,brca"
//var NPStrailsURL = "https://developer.nps.gov/api/v1/activities/parks?q=hiking&limit=50&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg"
//var NPStrailsURL = "https://developer.nps.gov/api/v1/activities/parks?q=trailhead&limit=50&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg"

// created an event listener for the dropdown menu to find the lat and lon for the selected park and put them into the weatherURL
 //NationalParkDropdownEl.addEventListener("click", function(event) {
    //event.preventDefault();
    //function getPark (event) {
    //if (event.target === ZionEl ){
        //lat = [0];
         //lon= [0]
    //} else if (event.target === BryceEl) {
       // lat = [1];
      //  lon = [1];
   // } else if (event.target === ArchesEl) {
       //  lat = [2];
       //  lon = [2]
    // } else if (event.target === CanyonlandsEl) {
      //  lat = [3];
      //   lon = [3]
    // } else if (event.target === CapitolReefEl) {
      //   lat = [4];
     //    lon = [4]
   //  } 
   //     getWeatherparks(weatherURL);
 //} 

function getWeatherparks(weatherURL) {
    fetch(weatherURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // created variables for name of park, date, weather icon, temperature, humidity, wind speed, and UV index to grab a 5 day forecast
        var date = data.list[0].dt_txt;
        date= date.split(" ");
        date= date[0];
        var weatherIcon = data.list[0].weather[0].icon;
        var temperature = data.list[0].main.temp;
        temperature = (temp - 273.15) * 1.80 + 32;
        temperature = Math.round(temperature);
        var humidity = data.list[0].main.humidity;
        var windSpeed = data.list[0].wind.speed;
        windSpeed = Math.round(windSpeed);
        var UVindex = data.list[0].main.uvi;
        // console logged the data to make sure it was working
        console.log(data);
        console.log(date);
        console.log(weatherIcon);
        console.log(temperature);
        console.log(humidity);
        console.log(windSpeed);
        console.log(UVindex);
        // created elements to display the 5 day forecast 
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
        var UVindexEl = document.createElement("p");
        UVindexEl.textContent = "UV Index: " + UVindex;
        fivedayforecast1El.appendChild(UVindexEl);
        fivedayforecast1El.setAttribute("class, card col-2");
        fivedayforecast1El.setAttribute("style", "background-color: #f5f5f5; border: 1px solid black; border-radius: 5px; padding: 10px; margin: 10px;");
        //created variables for day 2 of the 5 day forecast
        var date2El = data.list[8].dt_txt;
        date2El = date2El.split(" ");
        date2El = date2El[0];
        var weatherIcon2El = data.list[8].weather[0].icon;
        var temperature2El = data.list[8].main.temp;
        temperature2El = (temp - 273.15) * 1.80 + 32;
        temperature2El = Math.round(temperature2El);
        var humidity2El = data.list[8].main.humidity;
        var windSpeed2El = data.list[8].wind.speed;
        windSpeed2El = Math.round(windSpeed2El);
        var UVindex2El = data.list[8].main.uvi;
        // created elements to display day 2 of the 5 day forecast
        var date2El = document.createElement("p");
        date2El.textContent = date2El;
        fivedayforecast2El.appendChild(date2El);
        var weatherIcon2El = document.createElement("img");
        weatherIcon2El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon2El + ".png");
        fivedayforecast2El.appendChild(weatherIcon2El);
        var temperature2El = document.createElement("p");
        temperature2El.textContent = "Temperature: " + temperature2El + "°F";
        fivedayforecast2El.appendChild(temperature2El);
        var humidity2El = document.createElement("p");
        humidity2El.textContent = "Humidity: " + humidity2El + "%";
        fivedayforecast2El.appendChild(humidity2El);
        var windSpeed2El = document.createElement("p");
        windSpeed2El.textContent = "Wind Speed: " + windSpeed2El + " MPH";
        fivedayforecast2El.appendChild(windSpeed2El);
        var UVindex2El = document.createElement("p");
        UVindex2El.textContent = "UV Index: " + UVindex2El;
        fivedayforecast2El.appendChild(UVindex2El);
        fivedayforecast2El.setAttribute("class, card col-2");
        fivedayforecast2El.setAttribute("style", "background-color: #f5f5f5; border: 1px solid black; border-radius: 5px; padding: 10px; margin: 10px;");
        //created variables for day 3 of the 5 day forecast
        var date3El = data.list[16].dt_txt;
        date3El = date3El.split(" ");
        date3El = date3El[0];
        var weatherIcon3El = data.list[16].weather[0].icon;
        var temperature3El = data.list[16].main.temp;
        temperature3El = (temp - 273.15) * 1.80 + 32;
        temperature3El = Math.round(temperature3El);
        var humidity3El = data.list[16].main.humidity;
        var windSpeed3El = data.list[16].wind.speed;
        windSpeed3El = Math.round(windSpeed3El);
        var UVindex3El = data.list[16].main.uvi;
        // created elements to display day 3 of 5 day forecast
        var date3El = document.createElement("p");
        date3El.textContent = date3El;
        fivedayforecast3El.appendChild(date3El);
        var weatherIcon3El = document.createElement("img");
        weatherIcon3El.setAttribute("src", "http://openweathermap.org/img/w/" + weatherIcon3El + ".png");
        fivedayforecast3El.appendChild(weatherIcon3El);
        var temperature3El = document.createElement("p");
        temperature3El.textContent = "Temperature: " + temperature3El + "°F";
        fivedayforecast3El.appendChild(temperature3El);
        var humidity3El = document.createElement("p");
        humidity3El.textContent = "Humidity: " + humidity3El + "%";
        fivedayforecast3El.appendChild(humidity3El);
        var windSpeed3El = document.createElement("p");
        windSpeed3El.textContent = "Wind Speed: " + windSpeed3El + " MPH";
        fivedayforecast3El.appendChild(windSpeed3El);
        var UVindex3El = document.createElement("p");
        UVindex3El.textContent = "UV Index: " + UVindex3El;
        fivedayforecast3El.appendChild(UVindex3El);
        fivedayforecast3El.setAttribute("class, card col-2");
        fivedayforecast3El.setAttribute("style", "background-color: #f5f5f5; border: 1px solid black; border-radius: 5px; padding: 10px; margin: 10px;");

    })     
    }




//function getNPStrails() {
  //  fetch(NPStrailsURL)
 //   .then(function(response) {
  //      return response.json();
 //   })
 //  .then (function(data) {
  //     console.log(data)

 //  })
 //   .catch(function(error) {
  //      console.log(error)
 //   })
//}
 
//getNPStrails();