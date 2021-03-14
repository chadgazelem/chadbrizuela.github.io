// const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=090958a49237a34b162abea68f680ce2&units=imperial';

// fetch(forecastURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);

//         // let day = 0;
//         // const dayofWeek = ['Sun' , 'Mon' , 'Tue', 'Wed', 'Thu' , 'Fri' , 'Sat']

//         let ctr=0;
//         let d;
//         const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        
//         d = new Date(jsObject.list[i].dt_txt);

//             let z=jsObject.list[i].dt_txt.includes('18:00:00');
//                    if (z==true){
//                         document.getElementById(`day${ctr+1}`).textContent = dayofweek[d.getDay()];
//                         document.getElementById(`temp${ctr+1}`).textContent = jsObject.list[i].main.temp;
                       
//                     let imgsource = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
//                     let description = jsObject.list[i].weather[0].description;
//                         document.getElementById(`img${ctr+1}`).setAttribute('src', imgsource);
//                         document.getElementById(`img${ctr+1}`).setAttribute('alt', description);
                      

//                         ctr++;
                  
                        
//                     }
        
//     }); 

    const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=090958a49237a34b162abea68f680ce2&units=imperial';


fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);

   


  //5 day
  let ctr=0;
  let d;
  const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  //oldArray = jsObject.list;
    


  for (var i = 0; i < jsObject.list.length; i++) {
   
        d = new Date(jsObject.list[i].dt_txt);

            let z=jsObject.list[i].dt_txt.includes('18:00:00');
                   if (z==true){
                        document.getElementById(`day${ctr+1}`).textContent = dayofweek[d.getDay()];
                        document.getElementById(`temp${ctr+1}`).textContent = jsObject.list[i].main.temp;
                       
                    let imgsource = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                    let description = jsObject.list[i].weather[0].description;
                        document.getElementById(`img${ctr+1}`).setAttribute('src', imgsource);
                        document.getElementById(`img${ctr+1}`).setAttribute('alt', description);
                      

                        ctr++;
                  
                        
                    }
  }
 

 

 

});    