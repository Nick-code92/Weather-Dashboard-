// Use AJAX to hook into the API to retrieve data in JSON format.
// Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// Display the following under current weather conditions:
// City
// Date
// Icon image (visual representation of weather conditions)
// Temperature, Humidity, Wind speed, UV index
// Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city. 
// Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

// $(document).response(function(){
//     $("#city").click(function(){
        
//     })
// });
var APIKey = "900f37ff6f8f56e8116ad7f03e56cc9d";

 var city = prompt("city").split(" ").join("+");

var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial&lat={lat}&lon={lon}`;
// console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    $(".city").text(response.name);
    $(".wind").text(response.wind);
    $(".humidity").text(response.main);
    $(".temp").text(response.main);
});