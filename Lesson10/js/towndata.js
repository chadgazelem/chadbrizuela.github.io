const towndataURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndataURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    const towndata = jsonObject['towns']; // temporary checking for valid response and data parsing
    for (let i = 0; i < towndata.length; i++) {
      if ((i == 5) || (i == 1) || (i == 6)) {
        let box = document.createElement('section');
        let townName = document.createElement('h2');
        let townMotto = document.createElement('p');
        let yearfounded = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        townName.textContent = towndata[i].name;
        townMotto.textContent = 'Motto: ' + towndata[i].motto;
        yearfounded.textContent = 'Year Founded: ' + towndata[i].yearFounded;
        rainfall.textContent = 'Average Rain Fall: ' + towndata[i].averageRainfall;
        if (i == 5) {
          image.setAttribute('src', 'img/preston.jpg');
        } else if (i == 1) {
          image.setAttribute('src', 'img/fishhaven.jpg');
        } else if (i == 6) {
          image.setAttribute('src', 'img/sodaspring.jpg');
        }


        box.appendChild(townName);
        box.appendChild(townMotto);
        box.appendChild(yearfounded);
        box.appendChild(rainfall);
        box.appendChild(image);

        document.querySelector('div.box').appendChild(box);
      }
    }
  });
// const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     //console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const towns = jsonObject['towns'];
//     for (let i = 0; i < towns.length; i++) {
//       if ((i == 5) || (i == 1) || (i == 6)) {
//         let box = document.createElement('section');
//         let city = document.createElement('h1');
//         let motto = document.createElement('h2');
//         let year = document.createElement('p');
//         let population = document.createElement('p');
//         let rain = document.createElement('p');
//         let image = document.createElement('img');

//         city.textContent = towns[i].name;
//         motto.textContent = towns[i].motto;
//         year.textContent = 'Year Founded: ' + towns[i].yearFounded;
//         population.textContent = 'Population: ' + towns[i].currentPopulation;
//         rain.textContent = 'Rain: ' + towns[i].averageRainfall;
//         if (i == 5) {
//         image.setAttribute('src', 'img/preston.jpg');
//         } else if (i == 1){
//           image.setAttribute('src', 'img/fishhaven.jpg');
//         }else if (i == 6){
//           image.setAttribute('src', 'img/sodaspring.jpg');
//         }

//         box.appendChild(city);
//         box.appendChild(motto);
//         box.appendChild(year);
//         box.appendChild(population);
//         box.appendChild(rain);
//         box.appendChild(image);

//         document.querySelector('div.cards').appendChild(box);
//       }
//     }

//   });