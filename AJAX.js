// Use AJAX to hook into the API to retrieve data in JSON format.
// Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// Display the following under current weather conditions:
// City
// Date
// Icon image (visual representation of weather conditions)
// Temperature, Humidity, Wind speed, UV index
// Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city. 
// Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

function renderButtons() {
    $("#city").empty()

}

$("#City").on("click", function (e) {
    e.preventDefault();
    var city = $("#city-input").val().trim();
    fiveday(city)
});
var APIKey = "900f37ff6f8f56e8116ad7f03e56cc9d";

//  var city = prompt("city").split(" ").join("+");
var fiveday = function (city) {

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;
    // console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var rawforcast = response.list
        var forcast = []
        for (var i = 0; i < rawforcast.length; i++) {
            var date = rawforcast[i].dt_txt.split(" ")
            if (date[1] === "15:00:00") {
                forcast.push(rawforcast[i])
            }
        }
        console.log(forcast)

        $(".city").text(response.city.name);
        $(".wind").text(forcast[0].wind.speed);
        $(".humidity").text(forcast[0].main.humidity);
        $(".temp").text(forcast[0].main.temp);
        // $(".UV").text(forcast[0].)
    });
}
renderButtons();
