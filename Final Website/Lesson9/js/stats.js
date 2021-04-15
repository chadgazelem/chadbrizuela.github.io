const prestonURL = 'http://api.openweathermap.org/data/2.5/weather?id=1685117&appid=090958a49237a34b162abea68f680ce2&units=imperial';

fetch(prestonURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        const weather = document.querySelector('#current-weather');
        weather.textContent = jsObject.weather[0].description;

        const temperature = document.querySelector('#current-temp');
        temperature.textContent = jsObject.main.temp;

        const humidity = document.querySelector('#current-hum');
        humidity.textContent = jsObject.main.humidity;
    });