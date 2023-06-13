console.log("IM RUNNING!")



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

// Get all the place icons
var placeIcons = document.querySelectorAll('.place-icon');

// Attach a click event listener to each icon
placeIcons.forEach(function(icon) {
  var placeId = icon.getAttribute('data-place-id');
  icon.addEventListener('click', function() {
    // Call a function and pass the placeId as an argument
    showPlaceDescription(placeId);
  });
});

// Function to handle displaying the place description
function showPlaceDescription(placeId) {
  // Retrieve the place information based on the placeId
  var place = getPlaceById(placeId);

  // Display the place description using the retrieved place object
  // Example: Update the DOM with the place details
  var descriptionContainer = document.getElementById('descriptionContainer');
  descriptionContainer.innerHTML = '<h2>' + place.name + '</h2>' +
                                   '<p>' + place.description + '</p>' +
                                   '<img src="' + place.imageURL + '" alt="' + place.name + '">';

  // Show the description container
  descriptionContainer.style.display = 'block';
}

// Helper function to retrieve place information by ID
function getPlaceById(placeId) {
  // Perform a lookup or fetch the place information using the placeId
  // Return the place object with details
}



// Event listener for the icons of places
var placeIcons = document.querySelectorAll('.place-icon');
placeIcons.forEach(function(icon) {
  icon.addEventListener("click", function() {
    var placeId = icon.getAttribute('data-place-id');
    var place = getPlaceById(placeId);
    showPlaceDescription(place);
  });
});

// Helper function to get place by ID
function getPlaceById(placeId) {
  // Code to retrieve place information from data based on placeId
  // Return the place object
}

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