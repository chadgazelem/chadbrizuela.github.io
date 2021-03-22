const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++) {
      if (i == 6) {
        let eventlist = document.createElement('section');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        let event4 = document.createElement('p');

        event1.textContent = town[i].events[0];
        event2.textContent = town[i].events[1];
        event3.textContent = town[i].events[2];
        event4.textContent = town[i].events[3];
    
        eventlist.appendChild(event1);
        eventlist.appendChild(event2);
        eventlist.appendChild(event3);
      
        document.querySelector('div.prestonevent').appendChild(eventlist);
        
      }
    }

  });

    
  
