function handleSearch() {
  var searchInput = document.getElementById('searchInput');
  var searchTerm = searchInput.value.toLowerCase();

  var placeIcons = document.querySelectorAll('.place-icon');
  placeIcons.forEach(function(icon) {
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
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearch();
  }
});

var locationDetails = {
  "place19": {
    address: "Baskin Engineering Loop",
    mapLink: "https://goo.gl/maps/nVEbgL1cd8pe8MEWA",
    menuLink: "https://www.instagram.com/p/CVQ5DeyP8Ex/?igshid=MmJiY2I4NDBkZg%3D%3D",
    hours: "Mon - Fri: 11am - 3pm",
  },
  "place3": {
    address: "Oakes Cafe, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/TmFWKUHKdrPTLvMb6",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=23&locationName=Oakes+Cafe&naFlag=1",
    hours: "Mon - Thur: 8am - 8pm\nFri: 8am - 2pm",
    
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
    

}

// Get all the place icons
var placeIcons = document.getElementsByClassName('place-icon');
var detailsElement = document.getElementById('locationDetails');
var locationAddress = document.getElementById('locationAddress');
var locationMenu = document.getElementById('locationMenu');
var locationHours = document.getElementById('locationHours');
var closeDetailsButton = document.getElementById('closeLocationDetails');

closeDetailsButton.addEventListener('click', () => {
  detailsElement.style.display = 'none';
});

// Attach a click event listener to each icon
for (icon of placeIcons) {
  const currentIcon = icon;
  currentIcon.addEventListener('click', function() {
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