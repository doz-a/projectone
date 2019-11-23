// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 

$(document).ready(function () {

    // on click
    // $("#ingedientInput").on("click", function () {
    //     populateDrinkList($(this).text());

    //     // Clears button box every click 
    //     $("#drinkList").empty();
    // });
    // on click

    // ajax test 
    var title = "gin";
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + title;
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
                "<p>" + element.strDrink + "</p>",
                "<img src ='" + element.strDrinkThumb + "'>");
        }

    });
    // end ajax test

    // test 1
    // var ingredient = "gin";
    // var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     var tBody = $("tbody");
    //     var tRow = $("<tr>");

    //     // Methods run on jQuery selectors return the selector they we run on
    //     // This is why we can create and save a reference to a td in the same statement we update its text
    //     var titleTd = $("<td>").text(response.drinks.strDrink);
    //     var yearTd = $("<td>").text(response.Year);
    //     var actorsTd = $("<td>").text(response.Actors);

    //     // Append the newly created table data to the table row
    //     tRow.append(titleTd, yearTd, actorsTd);

    //     // Append the table row to the table body
    //     tBody.append(tRow);
    // });
    // end test 1 

    // // test 2
    // function populateDrinkList(ingredient) {
    //     $.ajax({

    //         url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient,
    //         method: "GET"
    //     }).then(function (response) {

    //         // Creates div for each gif
    //         response.data.forEach(function (element) {
    //             newDiv = $("<div>");
    //             newDiv.addClass("individual-drink-container");

    //             // Displays still image to HTML 
    //             var newImage = $("<img src = '" + element.strDrinkThumb + "'>");
    //             newImage.addClass("gif-image");

    //             // Add drink name
    //             newDiv.append("<p>Rating: " + element.strDrink.toUpperCase() + "</p>");

    //             // Append to gif box 
    //             $("#drinkList").append(newDiv);
    //         });

    //         // Animate and still of the giphy using clicks
    //     });
    // }

    // // end test 
    // populateDrinkList()
    // // end test 2 

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