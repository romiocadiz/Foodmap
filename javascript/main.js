function performSearch() {
  var keyword = $('#keywordInput').val();
  var category = $('#categoryInput').val();

  // GET request
  $.ajax({
    url: '/v1/foods/search',
    type: 'GET',
    headers: {
      'Authorization': 'Bearer kWibB0yZHLmq55ZR+xiFrw==Z8IfGw1kLP7kiipi'
    },
    data: {
      keyword: keyword,
      category: category
    },
    success: function(response) {
      // Handle the response data
      $('#result').text(JSON.stringify(response));
    },
    error: function(xhr, status, error) {
      // Handle errors
      $('#result').text('An error occurred: ' + error);
    }
  });
}

function handleSearch() {
  var searchInput = document.getElementById('searchInput');
  var searchTerm = searchInput.value.toLowerCase();

  var placeIcons = document.querySelectorAll('.place-icon');
  placeIcons.forEach(function (icon) {
    var placeName = icon.getAttribute('data-place-name').toLowerCase();
    if (placeName.includes(searchTerm)) {
      icon.style.display = 'block';
    } else {
      icon.style.display = 'none';
    }
  });
}

// Event listener for the search button
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

// Event listener for the search input (optional: trigger search on pressing Enter key)
var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearch();
  }
});

var locationDetails = {
  "place1": {
    address: "Alebrijes Oaxcan Kitchen, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/3wkLAW9HrT7N2xdX6",
    menuLink: "https://alebrijeskitchen.com/menu",
    hours: "Tues: 10am - 4pm\n Thurs: Fri 10am - 2pm\n Wed: 2pm - 6pm\nSat - Sun: 12pm - 8pm ",
  },
  "place2": {
    address: "Kelly's French Bakery, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/Er5KsycNGy425NSr7",
    menuLink: "https://www.kellysfrenchbakery.com/wholesale-delivery/ ",
    hours: "Mon - Sat: 10am - 3pm\nSun: Closed",
  },
  "place3": {
    address: "Oakes Cafe, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/TmFWKUHKdrPTLvMb6",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=23&locationName=Oakes+Cafe&naFlag=1",
    hours: "Mon - Thur: 8am - 8pm\nFri: 8am - 2pm",
  },
  "place4": {
    address: "College 9/10 Dining Hall, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/TmFWKUHKdrPTLvMb6",
    menuLink: "https://www.google.com/maps?ll=37.000769,-122.057834&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=6871629871090624202",
    hours: "Mon - Sun: 7am - 11pm",
  },
  "place6": {
    address: "Baskin Engineering Perks Coffee Bar, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/dir//Perk+Coffee+Bar+at+Baskin+Engineering+McLaughlin+Dr+Santa+Cruz,+CA+95064/@37.000461,-122.063017,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808e417c3252595b:0x8c6c5d61ae0ff220!2m2!1d-122.063017!2d37.000461?entry=ttu",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=22&locationName=Perk+Coffee+Bars&naFlag=1",
    hours: "Mon - Fri: 8am - 5pm\nFri: 8am - 3pm",
  },
  "place7": {
    address: "Physical Sciences Perks Coffee Bar, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/1zqT26uHw6FWaz3Q6",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=22&locationName=Perk+Coffee+Bars&naFlag=1",
    hours: "Mon - Fri: 8am - 5pm\nFri: 8am - 3pm",
  },
  "place8": {
    address: "Earth & Marine Sciences Perks Coffee Bar, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/dir//Perk+Coffee+Bar+at+Earth+%26+Marine+Sciences+Red+Hill+Rd+Santa+Cruz,+CA+95064/@36.9979477,-122.0599438,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808e417548570147:0xc7b4bff362287fef!2m2!1d-122.0599438!2d36.9979477?entry=ttu",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=22&locationName=Perk+Coffee+Bars&naFlag=1",
    hours: "Mon - Fri: 8am - 5pm\nFri: 8am - 3pm",
  },
  "place9": {
    address: "Global Village Cafe, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/EVq4BLngr3PUfpJN9",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=46&locationName=Global+Village+Cafe&naFlag=1",
    hours: "Mon - Thur: 8am - 8:30pm\nFri: 8am - 5pm",
  },
  "place10": {
    address: "Iveta, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/Iveta+Campus+UCSC/@36.9981123,-122.0584511,17z/data=!3m1!4b1!4m6!3m5!1s0x808e41a0d1315555:0x9192f1432c33695a!8m2!3d36.998108!4d-122.0558762!16s%2Fg%2F11cn0r507y?entry=ttu",
    menuLink: "https://iveta-campus-llc.square.site/",
    hours: "Mon - Fri: 9am - 5pm\nSat - Sun: Closed",
  },
  "place11": {
    address: "Cowell/Stevenson Dining Hall, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/osGeBq2AqUc7tsk97",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=05&locationName=Cowell%2fStevenson+Dining+Hall&naFlag=1",
    hours: "Sun - Thur: 7am - 11pm\nFri - Sat: 7am - 8pm",
  },
  "place12": {
    address: "Crown/Merrill Dining Hall, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/f5Yxh6oT5qUAi37G7",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=20&locationName=Crown%2fMerrill+Dining+Hall&naFlag=1",
    hours: "Mon - Fri: 7am - 8pm",
  },
  "place13": {
    address: "Merrill Market, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/Merrill+Market/@37.0001406,-122.0561724,17z/data=!3m1!4b1!4m6!3m5!1s0x808e419440f1af93:0xa1479bbc0bcd5a50!8m2!3d37.0001363!4d-122.0535975!16s%2Fg%2F11kjm1m8ys?hl=en-US&entry=ttu",
    menuLink: "https://dining.ucsc.edu/eat/#cafes",
    hours: "Mon - Fri: 10am - 6pm\nSat 10am - 5pm, Sun:Closed ",
  },
  "place1": {
    address: "Alebrijes Oaxcan Kitchen, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/Bay+Tree+Campus+Store/@36.9979056,-122.0582258,17z/data=!3m1!4b1!4m6!3m5!1s0x808e41a0d59e6699:0x183b8786aeb3fb84!8m2!3d36.9979013!4d-122.0556509!16s%2Fg%2F11bwygzls9?entry=ttu",
    menuLink: "https://alebrijeskitchen.com/menu",
    hours: "Tues 10am - 4pm\n Thurs, Fri 10am - 2pm\n Wed 2pm - 6pm\nSat - Sun: 12pm - 8pm ",
  },
  "place2": {
    address: "Kelly's French Bakery, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/McHenry+Library/@36.9957344,-122.0615794,17z/data=!3m2!4b1!5s0x808e41a19823356f:0xbb8117451bd05220!4m6!3m5!1s0x808e41a1a4b2b793:0xe94123003629bcf3!8m2!3d36.9957301!4d-122.0590045!16s%2Fm%2F02rdlhf?entry=ttu",
    menuLink: "https://www.kellysfrenchbakery.com/wholesale-delivery/ ",
    hours: "Mon - Sat: 10am - 3pm\nSun: closed",
  },
  "place4": {
    address: "College 9/10 Dinning Hall, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/TmFWKUHKdrPTLvMb6",
    menuLink: "https://www.google.com/maps?ll=37.000769,-122.057834&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=6871629871090624202",
    hours: "Mon - Sun: 7am - 11pm",
  },  
    

  "place15": {
    address: "Porter Market, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/Porter+Market/@36.9942087,-122.0684172,17z/data=!3m1!4b1!4m6!3m5!1s0x808e41cd81e258dd:0x11966e3728ee0362!8m2!3d36.9942044!4d-122.0658423!16s%2Fg%2F11tdy57b72?entry=ttu",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=50&locationName=Porter+Market&naFlag=1",
    hours: "Mon - Fri: 8am - 6:30pm\nSat:10am - 5pm\n Sun:closed",
  },
  "place16": {
    address: "Porter/Kresge Dining Hall, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/dir//porter+dining+hall/@36.9756918,-122.0682928,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808e419e8ff298a9:0xc0cc7592fcea39a0!2m2!1d-122.0659465!2d36.9942691?entry=ttu",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=25&locationName=Porter%2fKresge+Dining+Hall&naFlag=1",
    hours: "Mon - Sun: 7am - 11pm",
  },
  "place17": {
    address: "Dos Hermanos Pupuseria, Santa Cruz, CA 95064",
    mapLink: "https://www.google.com/maps/place/Steinhart+Way,+Santa+Cruz,+CA+95064/@36.9968258,-122.0620795,17z/data=!3m1!4b1!4m6!3m5!1s0x808e41a06948a333:0xbdfbdb5d7834b075!8m2!3d36.9968215!4d-122.0595046!16s%2Fg%2F1tfdz28f?entry=ttu",
    menuLink: "https://www.instagram.com/p/CA_2q6UAqJc/?igshid=MTc4MmM1YmI2Ng%3D%3D",
    hours: "Mon - Fri: 9:30am - 3:30pm",
  },
  "place18": {
    address: "Togos, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/Er5KsycNGy425NSr7",
    menuLink: "https://online.togos.com/menu/scotts-valley-mt-hermon-rd",
    hours: "Mon - Fri: 11am - 2pm",
  },
  "place19": {
    address: "S&B Food Truck, Santa Cruz 95060",
    mapLink: "https://goo.gl/maps/nVEbgL1cd8pe8MEWA",
    menuLink: "https://www.instagram.com/p/CVQ5DeyP8Ex/?igshid=MmJiY2I4NDBkZg%3D%3D",
    hours: "Mon - Fri: 11am - 3pm",
  },

};

// Get all the place icons
var placeIcons = document.getElementsByClassName('place-icon');
var detailsElement = document.getElementById('locationDetails');
var locationAddress = document.getElementById('locationAddress');
var locationMenu = document.getElementById('locationMenu');
var locationHours = document.getElementById('locationHours');
var closeDetailsButton = document.getElementById('closeLocationDetails');

closeDetailsButton.addEventListener('click', () => {
  detailsElement.style.display = 'none';
})

// Attach a click event listener to each icon
for (icon of placeIcons) {
  const currentIcon = icon;
  currentIcon.addEventListener('click', function () {
    var placeId = currentIcon.getAttribute('data-place-id');
    console.log(placeId)
    const details = locationDetails[placeId];
    locationAddress.text = details.address;
    locationAddress.href = details.mapLink;
    locationMenu.href = details.menuLink;
    locationHours.innerText = details.hours;

    detailsElement.style.display = 'block';
  });
};

// Helper function to filter places
function filterPlaces(places, filters) {
  // Code to filter places based on filters
  // Return the filtered places
}







// // Create a function that creates a filter menu that activates by clicking filter icon
// function createFilterMenu() {
//   var filterMenu = document.getElementById('filterMenuWindow');
//   filterMenu.style.display = 'block';

//   // var filterCheckboxes = document.querySelectorAll('.filter-checkbox');
//   // filterCheckboxes.forEach(function(checkbox) {
//   //   checkbox.addEventListener("change", function() {
//   //     // Code to handle filter selection
//   //   });
//   // });
// }

// Event listener for the filter icon
var filter = document.getElementById('filter');
var filterMenu = document.getElementById('filterMenuWindow');
var closeButton = document.getElementById('closeButton');

// Open the menu when we click the filter icon
filter.addEventListener("click", () => {
  var filterMenu = document.getElementById('filterMenuWindow');
  filterMenu.style.display = 'block';
});

// Close the menu when we click the close button
closeButton.addEventListener("click", () => {
  filterMenu.style.display = 'none';
});