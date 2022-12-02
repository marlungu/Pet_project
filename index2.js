var ins = [
    {
      "facility":"Banfield Pet Hospital",
      "insurance": "Spot Pet Health Insurance",
      "toUrl":"https://www.banfield.com/promotions/OWP?utm_source=google&utm_medium=cpc&utm_campaign=%5BOWP%5D+Standalone+-+Northeast+-+NonBrand&utm_content=%5BOWP%5D+Standalone+-+Northeast+-+NonBrand+-+General+-+Phrase&utm_term=animal+insurance&cid=cpc_google&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke7PM-eJTiL0UvfyKMRuDQzxoisRsQOkix_ZU4r0kTq1JlIAGvGvRNUaAk_ZEALw_wcB&gclsrc=aw.ds",
      "appointments":"",
      "phone":""
    },
    {
      "facility":"Banfield Pet Hospital",
      "insurance": "Lemonade Pet Health Insurance",
      "website":"https://www.banfield.com/promotions/OWP?utm_source=google&utm_medium=cpc&utm_campaign=%5BOWP%5D+Standalone+-+Northeast+-+NonBrand&utm_content=%5BOWP%5D+Standalone+-+Northeast+-+NonBrand+-+General+-+Phrase&utm_term=animal+insurance&cid=cpc_google&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke7PM-eJTiL0UvfyKMRuDQzxoisRsQOkix_ZU4r0kTq1JlIAGvGvRNUaAk_ZEALw_wcB&gclsrc=aw.ds",
      "appointments":"",
       "phone":""
    },
    {
      "facility":"Animal Dentistry and Oral Surgery",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=29708",
      "appointments":"",
      "phone":"(571) 209-1146"
    },
    {
      "facility":"Animal Medical Centers of Loudon (Ashburn Farm Animal Hospital)",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=24009",
      "appointments":"",
      "phone":"(703) 726-8784"
    },

    {
      "facility":"Behavior Solutions for Pets - Dr. Leslie Sinn, DVM, DACVB",
      "insurance": "ASPCA Pet Health Insurance",
      "url":"https://www.aspcapetinsurance.com/vet-locator/vet-clinic-details/?vetId=35575",
      "appointments":"",
      "phone":"(504) 454-9081"
    },

    {
      "facility":"VCA Healthy PAWS Medical Center",
      "insurance": "Healthy Paws Pet Insurance LLC",
       "url":"https://vcahospitals.com/healthy-paws",
      "appointments":"https://vcahospitals.com/healthy-paws/book-an-appointment?utm_source=maps&utm_medium=organic&utm_campaign=book-appointment&utm_content=au695",
      "phone":"(703) 754-4146"
    }
  ]
  
  var render = function(data) {
    var petData = document.getElementById('app');
    var insHTMLString = '<ul>'+
      data.map(function(ins){
        return '<li>'+
                '<strong>Facility: </strong>' + ins.facility + '<br/>' +
                '<strong>Insurance: </strong>' + ins.insurance + '<br/>' +
                '<strong>Website: </strong>' + ins.url  + '<br/>' +
                '<strong>Appointments: </strong>' + ins.appointments + '<br/>' +
                '<strong>Phone number: </strong>' + ins.phone + '<br/>' +
              '</li>';
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
  document.addEventListener('reset', function(event){
    event.preventDefault(event);
    render(ins);
  })
