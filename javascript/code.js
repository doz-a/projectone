// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 

$(document).ready(function () {

    // On document start, populates drink list with a search query of tequila
    populateDrinkList("tequila");

    // On document start, populates youtube list with a search query of long island ice tea 
    populateVideos("long island ice tea");

    // on click
    $("#ingredientButton").on("click", function () {

        // Prevents clearing of textbox
        event.preventDefault();

        // This line grabs the input from the textbox
        var ingredient = $("#ingredientInput").val().trim();

        // Populates drink list with a search query of user input 
        populateDrinkList(ingredient);

    });



    // Populates Drink List function 
    function populateDrinkList(ingredient) {

        // Start ajax cocktailDB
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Clears drink list every click so it doesn't keep populating
            $("#drinkList").empty();

            // Sets max drink count of appended drinks
            var drinkCount = 10;

            // If drinks are less than max drink count, set it to that number so no errors 
            if (response.drinks.length < 10) {
                drinkCount = response.drinks.length;
            }

            // For loop to run through 10 drinks 
            for (let i = 0; i < drinkCount; i++) {
                const element = response.drinks[i];

                // Append them to drink list 
                $("#drinkList").append(

                    // Dynamically creates cards using ES6 (ECMAscript 6), which doesn't require template literals
                    `<div class="card w-50" data-name="${element.strDrink}" "id="${element.strDrink}">
                        <img src=${element.strDrinkThumb}  class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.strDrink}</h5>
                        </div>
                    </div>`

                    // Dynamically creates cards using template literals (+ signs and lots of "")
                    // '<div class="card w-50"><img src="' + element.strDrinkThumb + '" class="card-img-top"><div class="card-body"><h6 class="card-title">' + element.strDrink + '</h6></div></div>'

                );
            }

            // Adds a click function to the drink cards targeting the entire card 
            $(".card.w-50").on("click", function () {

                // Gets attribute name of the drink, and stores it in a variable 
                var drinkNameClick = this.getAttribute('data-name');

                // Runs youtube search using the name of the drink
                populateVideos(drinkNameClick);

            });
            // End card click function

        });
        // End ajax cocktailDB

    }
    // End populate drink list function 

    // Function that runs ajax api search for youtube videos
    function populateVideos(drinkNameClick) {

        // Puts video in an array 
        var playerInfoList = [];
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search?',
            data: {

                // Queries youtube API using the drink name 
                q: 'how to make ' + drinkNameClick + ' drink',
                part: 'snippet',

                // API key 
                key: 'AIzaSyDu5sqWjnseE6xRjMlm_d0v9P9GZPz26YM',

                // Displays 4 videos not 5, not sure why number needs to be one higher to display desired amount 
                maxResults: 5
            },
            dataType: 'jsonp'

        }).then(function (response) {
            console.log(response);
            var results = response.items;

            // Value parameter required, but doesn't get read 
            $.each(results, function (index, value) {

                // Video player parameters
                var videoObj = {
                    id: 'player',
                    height: '25%',
                    width: '100%',
                    videoId: results[index].id.videoId,

                    // This causes quota usage to only use 20 units instead of 200 :)
                    type: 'video'
                }

                // Pushes the video player parameters into the player list array 
                playerInfoList.push(videoObj);
            });
            onYouTubePlayerAPIReady();
            function onYouTubePlayerAPIReady() {
                for (var i = 0; i < playerInfoList.length; i++) {
                    console.log(playerInfoList.length);

                    // Targets player ids in the HTML, and populates embedded video with iframe into them 
                    player = new YT.Player('player' + [i], {
                        height: '25%',
                        width: '100%',
                        videoId: playerInfoList[i].videoId
                    });
                }
            }
        });

        // Creates script tag for the iFrame, in the HTML before all other scripts
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // End Youtube API 
    }


})
// End document ready