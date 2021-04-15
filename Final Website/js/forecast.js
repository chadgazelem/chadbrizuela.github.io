const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=1685117&appid=090958a49237a34b162abea68f680ce2&units=imperial';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        for (var i = 0; i < jsObject.list.length; i++) {

            let d = new Date(jsObject.list[i].dt_txt)

            let cast = jsObject.list[i].dt_txt.includes('18:00:00');
            if (cast == true) {
                document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
                document.getElementById(`temperature${day+1}`).textContent = jsObject.list[i].main.temp;


                let imgsource = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                let description = jsObject.list[i].weather[0].description;
                document.getElementById(`img${day+1}`).setAttribute('src', imgsource);
                document.getElementById(`img${day+1}`).setAttribute('alt', description);

                day++

            }

        }

    });
