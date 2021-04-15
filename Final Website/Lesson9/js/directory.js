const requestURL = 'json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    console.table(jsonObject);
    const directories = jsonObject['company'];  // temporary checking for valid response and data parsing
    for (let i = 0; i < directories.length; i++ ) {

      let card = document.createElement('section');
      let cname = document.createElement('h2');
      let cimage = document.createElement('img');
      let cnum = document.createElement('p');
      let cadd = document.createElement('p'); 
      let cweb = document.createElement('p'); 
            
      cname.textContent = ' ' + directories[i].companyname;
      cimage.setAttribute('src', directories[i].companyimg);
    //cimage.setAttribute('alt', directories[i].name + ' ' + directories[i].lastname);
      cnum.textContent = '' + directories[i].companynumber;
      cadd.textContent = ' ' + directories[i].companyadd;
      cweb.textContent = ' ' + directories[i].companywebsite;
      
      

      card.appendChild(cname);
      card.appendChild(cimage);
      card.appendChild(cnum);
      card.appendChild(cadd);
      card.appendChild(cweb);
      
      
      document.querySelector('div.grid').appendChild(card);
    }
  });