// Use AJAX to hook into the API to retrieve data in JSON format.
// Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// Display the following under current weather conditions:
// City
// Date
// Icon image (visual representation of weather conditions)
// Temperature, Humidity, Wind speed, UV index
// Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city. 
// Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

var searchInput = $("#search-text");
var APIKey = "900f37ff6f8f56e8116ad7f03e56cc9d";
var queryURL
var fiveDayURL 

var searchList = document.querySelector("#search-list");
var searchButton = document.querySelector("#search-button");
var saveCity = [];

function showInfo(){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $(".city").html("<h2>" + response.name +  date + "  Weather Details  </h2>" );
           $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
           $(".humidity").text("Humidity: " + response.main.humidity + "%");
           $(".temp").text("Temperature (F):  " + response.main.temp);
});
}
$(searchButton).on("click", function(event) {
  event.preventDefault();
  var userCity = $(searchInput).val().trim();
  queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${APIKey}&units=imperial`;
  fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity},us&appid=${APIKey}&units=imperial`;
  saveCity.push(userCity);
  console.log(fiveDayURL)
  
  console.log(saveCity)
    showInfo();
    showFiveDay();
});

function showFiveDay(){
$.ajax({
    url: fiveDayURL,
    method: "GET"
}).then(function(response) {
  console.log(response)
  var myDays = response.list.filter(function(obj){
    // console.log(obj_dt.text)
    return(obj.dt_txt.split(" ")[1] === "15:00:00")
  });
  console.log(myDays)
  $(".forecast").empty()
  for(var i = 0; i< myDays.length; i ++ ){
  //  $( ".temperature").text("Temp: " + response.list[i].main.temp);
  //   $(".humid").text("Humidity: " + response.list[i].main.humidity + "%");
  //   $(".icon").img("" + response.list[i].main.weather.icon);s
  $(".forecast").append(`
        <ul>
          <li>temp: ${myDays[i].main.temp}</li>
          <li>humidity: ${myDays[i].main.humidity}</li>
          <li>wind: ${myDays[i].wind.speed}</li>
          
        </ul>
  `)
    
  }
// showFiveDay();
});
}

init();

function renderSaveCity() {
  searchList.innerHTML = "";

    for (var i = 0; i < saveCity.length; i++) {
    var city = saveCity[i];

    var button = document.createElement("button");
    button.textContent = city;
    button.setAttribute("data-index", i);

    searchList.appendChild(button);
  }
}

function init() {
  var storedSaveCity = JSON.parse(localStorage.getItem("saveCity"));

  if (storedSaveCity !== null) {
    saveCity = storedSaveCity;
  }
  renderSaveCity();
}

function storeSaveCity() {
  localStorage.setItem("saveCity", JSON.stringify(saveCity));
}
  
searchButton.addEventListener("submit", function(e) {
  e.preventDefault();
  var inputText = searchInput.value.trim();
  if (inputText === "") {
    return;
  }

  saveCity.push(inputText);
  searchInput.value = "";
  storeSaveCity();
  renderSaveCity();

});
  storeSaveCity();
  renderSaveCity();

    var m = moment();
     var date = m.format("L");
    console.log(date);