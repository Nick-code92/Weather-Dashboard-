// Use AJAX to hook into the API to retrieve data in JSON format.
// Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// Display the following under current weather conditions:
// City
// Date
// Icon image (visual representation of weather conditions)
// Temperature, Humidity, Wind speed, UV index
// Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city. 
// Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

var searchHistory = [];
var APIKey = "900f37ff6f8f56e8116ad7f03e56cc9d";

function renderButton() {
    $('#buttonHistory').empty()

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        console.log(localStorage.getItem(key));
        var x = $('#buttonHolder')
        var button = $('<button/>', {
            text: key,
            id: key,
            val: key,
            click: function () {
                renderWeather(key)
            }
        });
        button.attr('class', 'btn pr-5 historyBtn')
        x.append(button)
    }

    renderButton()

    function renderWeather(key) {
        event.preventDefault()
        var a = key
        var city = a
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial${APIkey}`;
        console.log(city)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            console.log(response.name)
            searchHistory.push(response.name)
            localStorage.setItem(response.name, response.name)
            var iconCode = response.weather[0].icon
            var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png"
            console.log()
            var iconHolder = $('<img>').attr('src', weatherIcon)


            var temp = response.main.temp
            var daily = response.name
            var humidity = response.main.humidity
            var wind = response.wind.speed

            console.log(temp)
            $('#current').empty()
            $('#temp').empty()
            $('#humidity').empty()
            $('#windSpeed').empty()

            $('#current').append(daily)
            $('#current').append(iconHolder)
            $('#temp').append(`Temperature: ${temp} F`)
            $('#humidity').prepend(`Hum.: ${humidity} %`)
            $('#windSpeed').append(`Wind Speed: ${wind} mph `)

            console.log(daily)

        })
        var fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial${APIkey}`



        $.ajax({
            url: fiveDay,
            method: 'GET'

        }).then(function (data) {
            console.log(data)

            var iconCode1 = data.list[1].weather[0].icon
            var iconCode2 = data.list[2].weather[0].icon
            var iconCode3 = data.list[3].weather[0].icon
            var iconCode4 = data.list[4].weather[0].icon
            var iconCode5 = data.list[5].weather[0].icon
            var weatherIcon1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png"
            var weatherIcon2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png"
            var weatherIcon3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png"
            var weatherIcon4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png"
            var weatherIcon5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png"

            var icon1 = $('<img>').attr('src', weatherIcon1)
            var icon2 = $('<img>').attr('src', weatherIcon2)
            var icon3 = $('<img>').attr('src', weatherIcon3)
            var icon4 = $('<img>').attr('src', weatherIcon4)
            var icon5 = $('<img>').attr('src', weatherIcon5)
            console.log(iconCode1)
            console.log(weatherIcon1)

            $('#d1Icon').empty()
            $('#d2Icon').empty()
            $('#d3Icon').empty()
            $('#d4Icon').empty()
            $('#d5Icon').empty()

            $('#d1Icon').append(icon1)
            $('#d2Icon').append(icon2)
            $('#d3Icon').append(icon3)
            $('#d4Icon').append(icon4)
            $('#d5Icon').append(icon5)


            $('#d1Humidity').empty()
            $('#d2Humidity').empty()
            $('#d3Humidity').empty()
            $('#d4Humidity').empty()
            $('#d5Humidity').empty()

            $('#d1Humidity').append(`Hum.:${data.list[1].main.humidity}`)
            $('#d2Humidity').append(`Hum.:${data.list[2].main.humidity}`)
            $('#d3Humidity').append(`Hum.:${data.list[3].main.humidity}`)
            $('#d4Humidity').append(`Hum.:${data.list[4].main.humidity}`)
            $('#d5Humidity').append(`Hum.:${data.list[5].main.humidity}`)

            $('#d1Temp').empty()
            $('#d2Temp').empty()
            $('#d3Temp').empty()
            $('#d4Temp').empty()
            $('#d5Temp').empty()

            $('#d1Temp').append(`Temp: ${data.list[1].main.temp}`)
            $('#d2Temp').append(`Temp: ${data.list[2].main.temp}`)
            $('#d3Temp').append(`Temp: ${data.list[3].main.temp}`)
            $('#d4Temp').append(`Temp: ${data.list[4].main.temp}`)
            $('#d5Temp').append(`Temp: ${data.list[5].main.temp}`)


        })

    }

    $('#searchButton').on('click', function (event) {
        event.preventDefault()
        var a = $('#search').val().trim()
        var city = a
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial${APIkey}`;
        console.log(city)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            console.log(response.name)
            searchHistory.push(response.name)
            localStorage.setItem(response.name, response.name)
            var iconCode = response.weather[0].icon
            var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png"
            console.log()
            var iconHolder = $('<img>').attr('src', weatherIcon)


            var temp = response.main.temp
            var daily = response.name
            var humidity = response.main.humidity
            var wind = response.wind.speed

            console.log(temp)
            $('#current').empty()
            $('#temp').empty()
            $('#humidity').empty()
            $('#windSpeed').empty()

            $('#current').append(daily)
            $('#current').append(iconHolder)
            $('#temp').append(`Temperature: ${temp} F`)
            $('#humidity').prepend(`Hum.: ${humidity} %`)
            $('#windSpeed').append(`Wind Speed: ${wind} mph `)


            console.log(daily)
        }

        )
        var fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial${APIkey}`



        $.ajax({
            url: fiveDay,
            method: 'GET'

        }).then(function (data) {
            console.log(data)


            var iconCode1 = data.list[1].weather[0].icon
            var iconCode2 = data.list[2].weather[0].icon
            var iconCode3 = data.list[3].weather[0].icon
            var iconCode4 = data.list[4].weather[0].icon
            var iconCode5 = data.list[5].weather[0].icon
            var weatherIcon1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png"
            var weatherIcon2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png"
            var weatherIcon3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png"
            var weatherIcon4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png"
            var weatherIcon5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png"

            var icon1 = $('<img>').attr('src', weatherIcon1)
            var icon2 = $('<img>').attr('src', weatherIcon2)
            var icon3 = $('<img>').attr('src', weatherIcon3)
            var icon4 = $('<img>').attr('src', weatherIcon4)
            var icon5 = $('<img>').attr('src', weatherIcon5)
            console.log(iconCode1)
            console.log(weatherIcon1)


            $('#d1Icon').append(icon1)
            $('#d2Icon').append(icon2)
            $('#d3Icon').append(icon3)
            $('#d4Icon').append(icon4)
            $('#d5Icon').append(icon5)
            $('#d1Humidity').append(`Hum.:${data.list[1].main.humidity}`)
            $('#d2Humidity').append(`Hum.:${data.list[2].main.humidity}`)
            $('#d3Humidity').append(`Hum.:${data.list[3].main.humidity}`)
            $('#d4Humidity').append(`Hum.:${data.list[4].main.humidity}`)
            $('#d5Humidity').append(`Hum.:${data.list[5].main.humidity}`)
            $('#d1Temp').append(`Temp: ${data.list[1].main.temp}`)
            $('#d2Temp').append(`Temp: ${data.list[2].main.temp}`)
            $('#d3Temp').append(`Temp: ${data.list[3].main.temp}`)
            $('#d4Temp').append(`Temp: ${data.list[4].main.temp}`)
            $('#d5Temp').append(`Temp: ${data.list[5].main.temp}`)

        })

    })
    $('.historyBtn').on('click', function (event) {
        event.preventDefault()
        var a = $('#')
        var city = a
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial${APIkey}`;
        console.log(city)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            console.log(response.name)
            searchHistory.push(response.name)
            localStorage.setItem(response.name, response.name)
            var iconCode = response.weather[0].icon
            var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png"
            console.log()
            var iconHolder = $('<img>').attr('src', weatherIcon)


            var temp = response.main.temp
            var daily = response.name
            var humidity = response.main.humidity
            var wind = response.wind.speed


            console.log(temp)
            $('#current').empty()
            $('#temp').empty()
            $('#humidity').empty()
            $('#windSpeed').empty()

            $('#current').append(daily)
            $('#current').append(iconHolder)
            $('#temp').append(`Temperature: ${temp} F`)
            $('#humidity').prepend(`Hum.: ${humidity} %`)
            $('#windSpeed').append(`Wind Speed: ${wind} mph `)


            console.log(daily)
        }

        )
        var fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial${APIkey}`



        $.ajax({
            url: fiveDay,
            method: 'GET'

        }).then(function (data) {
            console.log(data)


            var iconCode1 = data.list[1].weather[0].icon
            var iconCode2 = data.list[2].weather[0].icon
            var iconCode3 = data.list[3].weather[0].icon
            var iconCode4 = data.list[4].weather[0].icon
            var iconCode5 = data.list[5].weather[0].icon
            var weatherIcon1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png"
            var weatherIcon2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png"
            var weatherIcon3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png"
            var weatherIcon4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png"
            var weatherIcon5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png"

            var icon1 = $('<img>').attr('src', weatherIcon1)
            var icon2 = $('<img>').attr('src', weatherIcon2)
            var icon3 = $('<img>').attr('src', weatherIcon3)
            var icon4 = $('<img>').attr('src', weatherIcon4)
            var icon5 = $('<img>').attr('src', weatherIcon5)
            console.log(iconCode1)
            console.log(weatherIcon1)

            $('#d1Icon').append(icon1)
            $('#d2Icon').append(icon2)
            $('#d3Icon').append(icon3)
            $('#d4Icon').append(icon4)
            $('#d5Icon').append(icon5)

            $('#d1Humidity').append(`Hum.:${data.list[1].main.humidity}`)
            $('#d2Humidity').append(`Hum.:${data.list[2].main.humidity}`)
            $('#d3Humidity').append(`Hum.:${data.list[3].main.humidity}`)
            $('#d4Humidity').append(`Hum.:${data.list[4].main.humidity}`)
            $('#d5Humidity').append(`Hum.:${data.list[5].main.humidity}`)

            $('#d1Temp').append(`Temp: ${data.list[1].main.temp}`)
            $('#d2Temp').append(`Temp: ${data.list[2].main.temp}`)
            $('#d3Temp').append(`Temp: ${data.list[3].main.temp}`)
            $('#d4Temp').append(`Temp: ${data.list[4].main.temp}`)
            $('#d5Temp').append(`Temp: ${data.list[5].main.temp}`)

        })

    })       
