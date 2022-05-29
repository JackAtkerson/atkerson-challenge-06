var citySearchEl = document.querySelector ("#search-city");
var cityInputEl = document.querySelector("#city");
var currentWeatherEl = document.querySelector("#current");
var citySearchTerm = document.querySelector("#city-search-term");
var currentContainerEl = document.querySelector("#current-container");

var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=nashville&appid=b624f41aa968c07ea2542c035a761c0f";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayWeather(data, city);
            });
        } else {
            alert("Error: City Not Found");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Weather Man");
    });

    console.log(apiUrl);
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if(city) {
        getWeather(city);
        cityInputEl = "";
    } else {
        alert("Please enter a valid city name");
    }
};

var displayWeather = function(weather, searchTerm) {
    if (weather.length === 0) {
        currentWeatherEl.textContent = "City not found";
        return;
    }

    currentWeatherEl.textContent = "";
    citySearchTerm.textContent = searchTerm;

    for (var i = 0; i < weather.length; i++) {
        
    }

    var weatherEl = document.createElement("div");
    weatherEl.classList = "list-item flex-row justify-space-between align-center";

    console.log(searchTerm);
};

