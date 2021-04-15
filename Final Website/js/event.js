// const towndataURL = "json/event.json";

// fetch(towndataURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     // console.table(jsonObject);
//     const towndata = jsonObject['events']; // temporary checking for valid response and data parsing
   
//         let box = document.createElement('section');
//         let townName = document.createElement('h2');
//         let townMotto = document.createElement('p');
//         let yearfounded = document.createElement('p');
//         let rainfall = document.createElement('p');
//         let image = document.createElement('img');

//         townName.textContent = 'Motto: ' +  towndata[i].activityname;
//         townMotto.textContent = 'Motto: ' + towndata[i].date;
//         yearfounded.textContent = 'Year Founded: ' + towndata[i].yearFounded;
//         rainfall.textContent = 'Average Rain Fall: ' + towndata[i].averageRainfall;


//         box.appendChild(townName);
//         box.appendChild(townMotto);
//         box.appendChild(yearfounded);
//         box.appendChild(rainfall);
//         box.appendChild(image);

//          document.querySelector('div.events').appendChild(box);
//       }
    
//   );



const requestURL = 'json/event.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    // console.table(jsonObject);
    const municipalevents = jsonObject['events'];  // temporary checking for valid response and data parsing
    for (let i = 0; i < municipalevents.length; i++ ) {

      let card = document.createElement('section');
      let eventname = document.createElement('h2');
      let eventdate = document.createElement('p');
      let content = document.createElement('p'); 
      let image = document.createElement('img');
      let numChild = document.createElement('p');
            
      eventname.textContent = ' ' + municipalevents[i].activityname;
      eventdate.textContent = 'Date of Activity: ' + municipalevents[i].date;
      content.textContent = ' ' + municipalevents[i].content;
      image.setAttribute('src', municipalevents[i].imageurl);
      image.setAttribute('alt', municipalevents[i].name + ' ' + municipalevents[i].lastname);
      

      card.appendChild(eventname);
      card.appendChild(eventdate);
      card.appendChild(content);
      card.appendChild(image);
      
      
      document.querySelector('event').appendChild(card);
    }
  });