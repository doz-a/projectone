$(document).ready(function () {

    var apiKey = 'AIzaSyDu5sqWjnseE6xRjMlm_d0v9P9GZPz26YM';
    var playlistId = 'UcjSeM0mpGo&list=PLC18C218FC0EF64D3'
    var url = 'https://www.googleapis.com/youtube/v3/playlists';

    var options = {
        part: 'snippet',
        key: apiKey,
        maxResults: 20,
        playlistId: playlistId

    }
    loadVids();
    function loadVids() {
        $.getJSON(url, options, function (data) {
            console.log(data)

        }
        )
    }
    // $.ajax({
    //     url: url,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response)
    // });
})