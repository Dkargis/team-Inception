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


/* 
    The following arrays contain the longitudes and latituds for Utah's National Parks.
    Index Key: 0 = Zion, 1 = Bryce Canyon, 2 = Arches, 3 = Canyonlands, 4 = Capitol Reef
*/
var lat = [37.2982, 37.5930, 38.7331, 38.2136, 38.0877]
var lon = [113.0263, 112.1871, 109.5925, 109.9025, 111.1355]
var FiveDayForecastEl = document.getElementById("Five-Day-Forecast");
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkeyopenweather;
var NPStrailsURL = "https://developer.nps.gov/api/v1/amenities/parksplaces?q=trails&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg&id=39BE9614-4284-4B29-A650-AB2E7215C58B&parkCode=" + "arch,care,zion,cany,brca"
//var NPStrailsURL = "https://developer.nps.gov/api/v1/activities/parks?q=hiking&limit=50&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg"
//var NPStrailsURL = "https://developer.nps.gov/api/v1/activities/parks?q=trailhead&limit=50&api_key=xzXARQmOI9aGk4SgOgRskz4plWhHvCdtI3NcKsJg"

// created an event listener for the dropdown menu to find the lat and lon for the selected park and put them into the weatherURL
 NationalParkDropdownEl.addEventListener("click", function(event) {
    event.preventDefault();
    function getPark (event) {
    if (event.target === ZionEl ){
        lat = [0];
         lon= [0]
    } else if (event.target === BryceEl) {
        lat = [1];
        lon = [1];
    } else if (event.target === ArchesEl) {
         lat = [2];
         lon = [2]
     } else if (event.target === CanyonlandsEl) {
        lat = [3];
         lon = [3]
     } else if (event.target === CapitolReefEl) {
         lat = [4];
         lon = [4]
     } 
        getWeatherparks(weatherURL);}
 } );


function getWeatherparks(weatherURL) {
    fetch(weatherURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // created variables for name of park, date, weather icon, temperature, humidity, wind speed, and UV index
        var parkName = data.city.name;
        var date = data.list[0].dt_txt;
        var weatherIcon = data.list[0].weather[0].icon;
        var temp = data.list[0].main.temp;
        var humidity = data.list[0].main.humidity;
        var windSpeed = data.list[0].wind.speed;
        var UVindex = data.list[0].main.uvi;
        console.log(data)
        
    }
    )
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


FavoritesBTN.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Favorites Button Clicked")
    localStorage.setItem("Favorites", FavoritesBTN);
    log();
});

function log() {
    if (FavoritesBTN === true) {
        console.log("Favorites Button Clicked")
    }


}
getNPStrails();