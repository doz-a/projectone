<script src="https://apis.google.com/js/api.js"></script>

/**
 * Sample JavaScript code for youtube.search.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
        .then(function () { console.log("Sign-in successful"); },
            function (err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.youtube.search.list({
        "part": "snippet",
        "maxResults": 5,
        "order": "viewCount",
        "q": "Margaritas"
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
});

// {/* <button onclick="authenticate().then(loadClient)">authorize and load</button>
//     <button onclick="execute()">execute</button> */}

    // <button onclick="authenticate().then(loadClient)">authorize and load</button>
    // <button onclick="execute()">execute</button>


    // var apiKey = 'AIzaSyDu5sqWjnseE6xRjMlm_d0v9P9GZPz26YM';
    // var playlistId = 'UcjSeM0mpGo&list=PLC18C218FC0EF64D3'
    // var url = 'https://www.googleapis.com/youtube/v3/playlistItems';

    // var options = {
    //     part: 'snippet',
    //     key: apiKey,
    //     maxResults: 20,
    //     playlistId: playlistId

    // }
    // loadVids();
    // function loadVids() {
    //     $.getJSON(url, options, function (data) {
    //         console.log(data)

  //     }
    //     )
    // }
    // // $.ajax({
    //     url: url,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response)
    // }:
