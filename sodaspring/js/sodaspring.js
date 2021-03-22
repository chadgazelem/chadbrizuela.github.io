const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++) {
      if (i == 0) {
        let eventlist = document.createElement('section');
        let elist1 = document.createElement('p');
        let elist2 = document.createElement('p');
        let elist3 = document.createElement('p');
        let elist4 = document.createElement('p');

        elist1.textContent = town[i].events[0];
        elist2.textContent = town[i].events[1];
        elist3.textContent = town[i].events[2];
        elist4.textContent = town[i].events[3];
    
        eventlist.appendChild(elist1);
        eventlist.appendChild(elist2);
        eventlist.appendChild(elist3);
      
        document.querySelector('div.sodaspringevent').appendChild(eventlist);
        
      }
    }

  });

    
  
