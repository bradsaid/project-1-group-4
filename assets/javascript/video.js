// YOUTUBE API
$("#add-destination").on("click", function(event) {
    event.preventDefault();
    var searchterm = $("#destination-input").val().trim();
    console.log(searchterm);
    var APIkey = "&key=AIzaSyD_xUzbIohfKHueav2f1FBmmq5DVo7KE-A";
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchterm +" travel"+ APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var videoID = response.items[0].id.videoId;
        console.log(videoID);
        var videoURL = "https://www.youtube.com/embed/" + videoID +"?autoplay=1";
        console.log(videoURL)
        $("#video-view").html('<br><br><br><br><br><iframe width=80% height="720px" src="' + videoURL + '"></iframe>');
    }); 

});