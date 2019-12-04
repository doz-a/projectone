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

    // Start Youtube api 

    // Make on click function that runs this when a populated drink name is clicked 
    var playerInfoList = [];

    $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?',
        data: {

            // Need to make a variable that inputs drink value here
            q: 'how to make 69 special drink',
            part: 'snippet',
            key: 'AIzaSyDu5sqWjnseE6xRjMlm_d0v9P9GZPz26YM',
            maxResults: 5
        },
        dataType: 'jsonp'

    }).then(function (response) {
        console.log(response);
        var results = response.items;
        $.each(results, function (index, value) {
            var videoObj = {
                id: 'player',
                height: '',
                width: '100%',
                videoId: results[index].id.videoId
            }
            playerInfoList.push(videoObj);
        });
        onYouTubePlayerAPIReady();
        function onYouTubePlayerAPIReady() {
            for (var i = 0; i < playerInfoList.length; i++) {
                player = new YT.Player('player' + [i], {
                    height: '',
                    width: '100%',
                    videoId: playerInfoList[i].videoId
                });
            }
        }
    });

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // End Youtube API 

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