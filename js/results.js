var ins = [
    {
      "facility":"Banfield Pet Hospital",
      "insurance": "Spot Pet Health Insurance",
      "url":"https://www.banfield.com/en",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(877) 656-7146"
    },
    {
      "facility":"Banfield Pet Hospital",
      "insurance": "Lemonade Pet Health Insurance",
      "url":"https://www.banfield.com/en",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
       "phone":"(877) 656-7146"
    },
    {
      "facility":"Animal Dentistry and Oral Surgery",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=29708",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(571) 209-1146"
    },
    {
      "facility":"Animal Medical Centers of Loudoun (Ashburn Farm Animal Hospital)",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=24009",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(703) 726-8784"
    },

    {
      "facility":"Behavior Solutions for Pets - Dr. Leslie Sinn, DVM, DACVB",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=35575",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
      "phone":"(504) 454-9081"
    },

    {
      "facility":"VCA Healthy PAWS Medical Center",
      "insurance": "Healthy Paws Pet Insurance LLC",
       "url":"https://vcahospitals.com/healthy-paws",
      "appointments":"<br><a href = /html/appointment.html>Make an appointment</a>",
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
                '<td><strong>Website: </strong>' + ins.url  + '<br/>' +
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

 