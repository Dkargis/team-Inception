var APIkeyopenweather = "2b43e2e1e9e4752f4b3c2320f365c4f8"
var APIkeyNPS = "xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg"
var NationalParkDropdownEl = document.getElementsByClassName("National-Park-Dropdown")
var ZionEl = document.getElementById("Zion");
var BryceEl = document.getElementById("Bryce");
var ArchesEl = document.getElementById("Arches");
var CanyonlandsEl = document.getElementById("Canyonlands");
var CapitolReefEl = document.getElementById("Capitol-Reef")
test

/* 
    The following arrays contain the longitudes and latituds for Utah's National Parks.
    Index Key: 0 = Zion, 1 = Bryce Canyon, 2 = Arches, 3 = Canyonlands, 4 = Capitol Reef
*/
var lat = [37.2982, 37.5930, 38.7331, 38.2136, 38.0877]
var lon = [113.0263, 112.1871, 109.5925, 109.9025, 111.1355]
var FiveDayForecastEl = document.getElementById("Five-Day-Forecast");
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkeyopenweather;
var NPStrailsURL = ""

NationalParkDropdownEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === ZionEl ){
        lat = [0];
        lon= [0]
    }
} else 

function getWeatherparks(weatherURL) {
    fetch(weatherURL)
}
