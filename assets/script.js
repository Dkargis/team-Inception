// created a variable to for the weather API key and the NPS API key, and the elements for the dropdown menu
var APIkeyopenweather = "2b43e2e1e9e4752f4b3c2320f365c4f8";
var APIkeyNPS = "xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg";
var NationalParkDropdownEl = document.querySelector(".National-Park-Dropdown");

var parkSelectEl = document.querySelector(".Park-Option");

var ZionEl = document.getElementById("Zion");
var BryceEl = document.getElementById("Bryce");
var ArchesEl = document.getElementById("Arches");
var CanyonlandsEl = document.getElementById("Canyonlands");
var CapitolReefEl = document.getElementById("Capitol-Reef");
var selectedPark;

/* 
    The following arrays contain the longitudes and latituds for Utah's National Parks.
    Index Key: 0 = Zion, 1 = Bryce Canyon, 2 = Arches, 3 = Canyonlands, 4 = Capitol Reef
*/
var lat = [37.2982, 37.5930, 38.7331, 38.2136, 38.0877]
var lon = [113.0263, 112.1871, 109.5925, 109.9025, 111.1355]
var FiveDayForecastEl = document.getElementById("Five-Day-Forecast");
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkeyopenweather;
var NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "arch,care,zion,cany,brca"

// NationalParkDropdownEl.addEventListener("click", function(event) {
//     event.preventDefault();
//     if (event.target === ZionEl ){
//         lat = [0];
//         lon= [0]
//     } else if (event.target === BryceEl) {
//         lat = [1];
//         lon = [1]
//     } else if (event.target === ArchesEl) {
//         lat = [2];
//         lon = [2]
//     } else if (event.target === CanyonlandsEl) {
//         lat = [3];
//         lon = [3]
//     } else if (event.target === CapitolReefEl) {
//         lat = [4];
//         lon = [4]
//     } 
// } )

function getWeatherparks(weatherURL) {
    fetch(weatherURL)
}

function getNPStrails() {
    fetch(NPStrailsURL)
    .then(function(response) {
        return response.json();
    })
   .then (function(data) {
       console.log(data)

   })
    .catch(function(error) {
        console.log(error)
    })

}

// Grabs the user input from the park dropdown.
document.body.addEventListener("click", function(event){
if (event.target.className = "Park-Option") {
    var parkDropdown = document.getElementById("Park-Dropdown");
    selectedPark = parkDropdown.options[parkDropdown.selectedIndex].value;
    console.log(selectedPark);
}}, false);
