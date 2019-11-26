// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 

$(document).ready(function () {

    // on click
    $("#ingedientButton").on("click", function () {
        $("#ingredientInput");
        populateDrinkList();

        // Clears button box every click 
        $("#drinkList").empty();
    });
    // on click
    // populateDrinkList(ingredient);

    // var ingredient = "ingredient"
    // document.getElementById("ingedientInput").value = ingredient;

    // Populates Drink List function 
    function populateDrinkList() {

        // Start ajax cocktailDB
        var ingredient = "gin";
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

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
                    "<hr>",
                    "<h5><p>" + element.strDrink + "</p></h5>",
                    "<img src ='" + element.strDrinkThumb + "'>");
            }
        });
        // End ajax cocktailDB
    }
    // End populate drink list function 
})

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