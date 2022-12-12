var ins = [
    {
      "facility":"<a href='https://www.banfield.com/en'>Banfield Pet Hospital</a>",
      "insurance": "<a href = 'https://spotpetins.com/'><img src='/images/spot.svg' alt='Spot Pet Health Insurance'></a>",
      "url":"https://www.banfield.com/en",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(877) 656-7146"
    },
    {
      "facility":"<a href='https://www.banfield.com/en'>Banfield Pet Hospital</a>",
      "insurance": " <a href='https://www.lemonade.com/pet?utm_source=google-search-brand_pet_us_bau_prospect&utm_medium=ua&utm_campaign=14137430090&utm_term=127108543082_lemonade%20pet%20insurance_c&utm_content=631797340744'><img src='/images/lemonade.svg' alt='Lemonade Pet Health Insurance'></a>",
      "url":"<a href='https://www.banfield.com/en'>https://www.banfield.com/en</a>",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
       "phone":"(877) 656-7146"
    },
    {
      "facility":"<a href='https://animaldentalspecialist.com/'>Animal Dentistry and Oral Surgery</a>",
      "insurance": "<a href='https://www.aspcapetinsurance.com/'><img src='/images/aspca.svg' alt='ASPCA Pet Health Insurance'></a>",
      "url":"<a href='https://animaldentalspecialist.com/'>https://animaldentalspecialist.com</a>",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(571) 209-1146"
    },
    {
      "facility":"<a href='https://www.loudounvet.com/'>Animal Medical Centers of Loudoun</a>",
      "insurance": "<a href='https://www.aspcapetinsurance.com/'><img src='/images/aspca.svg' alt='ASPCA Pet Health Insurance'></a>",
      "url":"<a href='https://www.loudounvet.com/'>https://www.loudounvet.com</a>",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(703) 726-8784"
    },

    {
      "facility":"<a href='https://www.behaviorsolutions.guru/'>Behavior Solutions for Pets</a>",
      "insurance": "<a href='https://www.aspcapetinsurance.com/'><img src='/images/aspca.svg' alt='ASPCA Pet Health Insurance'></a>",
      "url":"<a href='https://www.behaviorsolutions.guru/'>https://www.behaviorsolutions.guru</a>",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(504) 454-9081"
    },

    {
      "facility":"<a href='https://vcahospitals.com/'>VCA Healthy PAWS Medical Center</a>",
      "insurance": "<a href='https://www.healthypawspetinsurance.com/'><img src='/images/healthypaws.webp' alt='Healthy Paws Pet Insurance LLC'></a>",
       "url":"<a href='https://vcahospitals.com/'>https://vcahospitals.com</a>",
      "appointments":"<a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(703) 754-4146"
    }
  ]
  
  var render = function(data) {
    var petData = document.getElementById('app');
    var insHTMLString = '<table border="2">'+
      data.map(function(ins){
        return '<tr>'+
                '<td><strong>Facility: </strong>' + ins.facility + '<br/>' +
                '<td><strong>Insurance: </strong>' + ins.insurance + '<br/>' +
                //'<td><strong>Website: </strong>' + ins.url  + '<br/>' +
                '<td><strong>Appointments: </strong>' + ins.appointments + '<br/>' +
                '<td><strong>Phone number: </strong>' + ins.phone + '<br/>' +
              '</tr>';
      }).join('');
      + '</ul>';
    petData.innerHTML = insHTMLString;
  }
//   render(ins);

  
  var handleSearch = function(event) {
    event.preventDefault();
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = ins.filter(function(ins){
      // Create a string of all object values
      var insString = '';
      for(var key in ins) {
        if(ins.hasOwnProperty(key) && ins[key] !== '') {
          insString += ins[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return ins objects where a match with the search regex if found
      return insString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(){
    render.preventDefault();
  })
