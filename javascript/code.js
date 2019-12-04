// MAKE SURE you're working in a branch! "git branch" in terminal to check if you're in the master or the branch
// git pull origin master at each session that you begin! 

$(document).ready(function () {

    populateDrinkList("tequila");

    // on click
    $("#ingredientButton").on("click", function () {
        event.preventDefault();
        // console.log("buttonworks");
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

                    // ES6 
                    `<div class="card w-50" data-name="${element.strDrink}" "id="${element.strDrink}">
                        <img src=${element.strDrinkThumb}  class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.strDrink}</h5>
                        </div>
                    </div>`
                    // Clicking on generated cocktail image
                    // Grab name of cocktail
                    // Store as a variable (drinkClickName)
                    // Input variable as the youtube ajax query 
                    // Make youtube query a function

                    // Append card working 
                    // '<div class="card w-50"><img src="' + element.strDrinkThumb + '" class="card-img-top"><div class="card-body"><h6 class="card-title">' + element.strDrink + '</h6></div></div>'

                    // "<div class='col-sm-4'>",
                    // "<h5><p>" + element.strDrink + "</h5></p>",
                    // "<img src ='" + element.strDrinkThumb + "'>",
                    // "</div>"
                );
            }

            // Test click function 

            // $(".card.w-50>img").on("click", function () {
            $(".card.w-50").on("click", function () {
                console.log("buttonworks");
                console.log(this.getAttribute('data-name'));

                var drinkNameClick = this.getAttribute('data-name');

                populateVideos(drinkNameClick);
                // On click, grab the name of the cocktail
                // Store the name in a variable
                // Put that variable in the youtube Query 
                // Populate youtube box with youtube queries 


            });

        });
        // End ajax cocktailDB

    }
    // End populate drink list function 

    function populateVideos(drinkNameClick) {


        // Start Youtube api 

        var playerInfoList = [];
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search?',
            data: {


                q: 'how to make ' + drinkNameClick + ' drink',
                part: 'snippet',

                key: 'AIzaSyBBC9WvAnCLIpCD6YdzdhKFonnNLl8tUi4',
                maxResults: 5
            },
            dataType: 'jsonp'

        }).then(function (response) {
            console.log(response);
            var results = response.items;

            // Value parameter required, but doesn't get read 
            $.each(results, function (index, value) {
                var videoObj = {
                    id: 'player',
                    height: '25%',
                    width: '100%',
                    videoId: results[index].id.videoId,

                    // This causes quota usage to only use 20 units instead of 200 :)
                    type: 'video'
                }
                playerInfoList.push(videoObj);
            });
            onYouTubePlayerAPIReady();
            function onYouTubePlayerAPIReady() {
                for (var i = 0; i < playerInfoList.length; i++) {
                    console.log(playerInfoList.length);
                    player = new YT.Player('player' + [i], {
                        height: '25%',
                        width: '100%',
                        videoId: playerInfoList[i].videoId
                    });
                }
            }
        });

        // 2. This code loads the IFrame Player API code asynchronously.
        // Creates tag for the iFrame in the HTML before all other scripts
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // End Youtube API 
    }


})
// End document ready

// link for search cocktail by name api : 
// https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// link for search cocktail by ingredient api :
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
