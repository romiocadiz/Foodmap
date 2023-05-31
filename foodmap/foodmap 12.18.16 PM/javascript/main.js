//below will be the pseudocode I started

//(Sienna) create a function that creates a filter menu that activates by clicking filter icon
    //use checkboxes and input form for search bar
        //put search bar on top right corner of form with placeholder "search"
     //two categories of filter will be available:
        //sort by: (1) distance (2) popularity (3) rating
        //type of places: (1) cafes (2) dining halls (3) food trucks (4) markets
    //there also needs to be an x on the input form to let user exit when clicked
        //put x in top left corner 
       
        $(function() {

            $("#filter").click(function() {
                $("#filterMenuWindow").show();
            });
                    
            $("#exitButton").click(function() {
                $("#filterMenuWindow").hide();
            });
                
            $("#formSubmitButton").click(function() {
                var searchTerm = $("#searchBox").val();
                console.log(searchTerm);
        });
                    
        });

        
//create function that shows description of places
    //content consists of name of place, hours, dining schedule, link to see full menu
        //link will redirect user to another page for full menu: 
            //breakfast, lunch, dinner, and late night

//(Kali) create an event listener for filter icon
    //make the content of the function above show on click and disappear on clicking x
    //make content sort by filters based off of options selected

//(Romi) create an event listener for search bar
    //make the name of places appear when clicking on search bar
    //submit search when search icon is pressed
    //click elsewhere to exit search


//(Tony) create an event listener for icon of places
    //make description of place pop up when icon is clicked
    //make description go away when x icon is clicked

// (Ellie) create an event listener for redirecting to menu
        //add a link to redirect back to map on menu page