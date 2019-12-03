// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 

$(document).ready(function () {

    // on click
    $("#ingredientButton").on("click", function () {
        event.preventDefault();
        console.log("buttonworks");
        // This line grabs the input from the textbox
        var ingredient = $("#ingredientInput").val().trim();
        populateDrinkList(ingredient);

    });

    // Populates Drink List function 
    function populateDrinkList(ingredient) {

        // Start ajax cocktailDB
        // var ingredient = $("#ingredientInput").val().trim();
        // console.log("capture input successful");
        // var ingredient = "gin"
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Clears drink list every click 
            $("#drinkList").empty();

            // Sets max drink count 
            var drinkCount = 10;

            // If drinks are less than max drink count, set to that number so no errors 
            if (response.drinks.length < 10) {
                drinkCount = response.drinks.length;
            }

            // For loop to run through 10 drinks 
            for (let i = 0; i < drinkCount; i++) {
                const element = response.drinks[i];

                // Append them to drink list 
                $("#drinkList").append(
                    // "<div class='col-sm-4'>",
                    // "<h5><p>" + element.strDrink + "</h5></p>",
                    // "<img src ='" + element.strDrinkThumb + "'>",
                    // "</div>"

                    // Append card here is broken 
                    // '<div class="card w-50">',
                    // '<img src="' + element.strDrinkThumb + '" class="card-img-top">',
                    // '<div class="card-body">',
                    // '<h5 class="card-title">' + element.strDrink + '</h5>',
                    // '</div>',
                    // '</div>',

                    // Append card working 
                    '<div class="card w-50"><img src="' + element.strDrinkThumb + '" class="card-img-top"><div class="card-body"><h6 class="card-title">' + element.strDrink + '</h6></div></div>'
                );
            }
        });
        // End ajax cocktailDB
    }
    // End populate drink list function 
})
// End document ready

// link for search cocktail by name api : 
// https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// link for search cocktail by ingredient api :
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// ajax function to search for liquor preference 
// liquor preference needs an input box 

// ajax function to search for ingredient preference 
// ingredient preference needs an input box 

// append 10 drinks to the drinksList div
// drink name
// shows ingredients for each drink

// append 5 tutorial videos to the youtube div each one gets a row 

// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 