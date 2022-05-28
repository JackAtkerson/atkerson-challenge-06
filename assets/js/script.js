var citySearchEl = document.querySelector ("#search-city");
var cityInputEl = document.querySelector("#city");
var searchHistoryEl = document.querySelector("#search-history")

var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=b624f41aa968c07ea2542c035a761c0f";

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

    var city = cityInputEl.ariaValueMax.trim();

    if(city) {
        getWeather(city);
        cityInputEl = "";
    } else {
        alert("Please enter a valid city name");
    }
};

var displayWeather = function() {
    console.log("More weather? sheesh");
};

getWeather();
