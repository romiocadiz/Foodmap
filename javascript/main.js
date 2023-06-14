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
  "place9": {
    address: "414 McHenry Rd, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/EVq4BLngr3PUfpJN9",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=46&locationName=Global+Village+Cafe&naFlag=1",
    hours: "Mon - Thur: 8am - 8:30pm\nFri: 8am - 5pm",
    
  },
  "place11": {
    address: "520 Cowell-Stevenson Road, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/osGeBq2AqUc7tsk97",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=05&locationName=Cowell%2fStevenson+Dining+Hall&naFlag=1",
    hours: "Sun - Thur: 7am - 11pm\nFri - Sat: 7am - 8pm",
    
  },
  "place12": {
    address: "630 Crown Rd, Santa Cruz, CA 95064",
    mapLink: "https://goo.gl/maps/f5Yxh6oT5qUAi37G7",
    menuLink: "https://nutrition.sa.ucsc.edu/shortmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum=20&locationName=Crown%2fMerrill+Dining+Hall&naFlag=1",
    hours: "Mon - Fri: 7am - 8pm",
    
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