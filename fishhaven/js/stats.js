const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5585010&&appid=090958a49237a34b162abea68f680ce2&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
         console.log(jsObject);

        const weather = document.querySelector('#current-weather');
        weather.textContent = jsObject.weather[0].description;

        const temperature = document.querySelector('#current-temp');
        temperature.textContent = jsObject.main.temp;

        const humidity = document.querySelector('#current-hum');
        humidity.textContent = jsObject.main.humidity;

        const windSpeed = document.querySelector('#current-wind');
        windSpeed.textContent = jsObject.wind.speed;

        var temp = jsObject.main.temp;
        var wSpeed = jsObject.wind.speed;
        var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));

        var windChill = Math.round(windChill);
        document.getElementById("windChill").innerHTML = windChill;

    });