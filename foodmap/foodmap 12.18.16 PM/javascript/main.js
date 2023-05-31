//below will be the pseudocode I started

//create a function that creates a filter menu that activates by clicking filter icon
    //use checkboxes and input form for search bar
        //put search bar on top right corner of form with placeholder "search"
     //two categories of filter will be available:
        //sort by: (1) distance (2) popularity (3) rating
        //type of places: (1) cafes (2) dining halls (3) food trucks (4) markets
    //there also needs to be an x on the input form to let user exit when clicked
        //put x in top left corner 

//create function that shows description of places
    //content consists of name of place, hours, dining schedule, link to see full menu
        //link will redirect user to another page for full menu: 
            //breakfast, lunch, dinner, and late night

//create an event listener for filter icon
    //make the content of the function above show on click and disappear on clicking x
    //make content sort by filters based off of options selected

//create an event listener for search bar
    //make the name of places appear when clicking on search bar
    //submit search when search icon is pressed
    //click elsewhere to exit search

//create an event listener for icon of places
    //make description of place pop up when icon is clicked
    //make description go away when x icon is clicked

/* The following code is from Tony Pau and is the New Code made.
The Original Code I made I changed to comments as I wanted to try this New Code.
I doubt either code works but both can serve as a great starter and resource for the future */
document.addEventListener('click',function(event){
    const alebrijes = event.target.closest('.alebrijes');
    if (alebrijes !== null {
        console.log(alebrijes);
    }
});

document.addEventListener('click',function(event){
    const bakery = event.target.closest('.bakery');
    if (bakery !== null {
        console.log(bakery);
    }
});

document.addEventListener('click',function(event){
    const oakesCafe = event.target.closest('.oakes-cafe');
    if (oakesCafe !== null {
        console.log(oakesCafe);
    }
});

document.addEventListener('click',function(event){
    const c10Dhall = event.target.closest('.c10-dhall');
    if (c10Dhall !== null {
        console.log(c10Dhall);
    }
});

document.addEventListener('click',function(event){
    const perks1 = event.target.closest('.perks1');
    if (perks1 !== null {
        console.log(perks1);
    }
});

document.addEventListener('click',function(event){
    const perks2 = event.target.closest('.perks2');
    if (perks2 !== null {
        console.log(perks2);
    }
});

document.addEventListener('click',function(event){
    const perks3 = event.target.closest('.perks3');
    if (perks3 !== null {
        console.log(perks3);
    }
});

document.addEventListener('click',function(event){
    const globalCafe = event.target.closest('.global-cafe');
    if (globalCafe !== null {
        console.log(globalCafe);
    }
});

document.addEventListener('click',function(event){
    const coffee = event.target.closest('.coffee');
    if (coffee !== null {
        console.log(coffee);
    }
});

document.addEventListener('click',function(event){
    const cowellDhall = event.target.closest('.cowell-dhall');
    if (cowellDhall !== null {
        console.log(cowellDhall);
    }
});

document.addEventListener('click',function(event){
    const crownDhall = event.target.closest('.crown-dhall');
    if (crownDhall !== null {
        console.log(crownDhall);
    }
});

document.addEventListener('click',function(event){
    const merrillMarket = event.target.closest('.merrill-market');
    if (merrillMarket !== null {
        console.log(merrillMarket);
    }
});

document.addEventListener('click',function(event){
    const porterMarket = event.target.closest('.porter-market');
    if (porterMarket !== null {
        console.log(porterMarket);
    }
});

document.addEventListener('click',function(event){
    const porterDhall = event.target.closest('.porter-dhall');
    if (porterDhall !== null {
        console.log(porterDhall);
    }
});

document.addEventListener('click',function(event){
    const pupusa = event.target.closest('.pupusa');
    if (pupusa !== null {
        console.log(pupusa);
    }
});

document.addEventListener('click',function(event){
    const snb = event.target.closest('.snb');
    if (snb !== null {
        console.log(snb);
    }
});

document.addEventListener('click',function(event){
    const togos = event.target.closest('.togos');
    if (togos !== null {
        console.log(togos);
    }
});

/* (there is a line towards the end of index.html with a comment that is for this Original Code)
Tony's Original Code below:
document.addEventListener('DOMContentLoaded', function() {
    const iconButtons = document.querySelectorAll('.grow');
      
    iconButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const description = this.getAttribute('alt');
            const descriptionContainer = document.getElementById('descriptionContainer');
      
            if (descriptionContainer.textContent === description) {
                descriptionContainer.textContent = '';
            } else {
                descriptionContainer.textContent = description;
            }
        });
    });
});
*/

//create an event listener for redirecting to menu
        //add a link to redirect back to map on menu page