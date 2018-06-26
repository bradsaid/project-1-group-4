
function hasImages() {
    if ($('#images').length > 0) {
        console.log("not empty");
    } else {
        $("#images-view").append("No Images Found - Try Another Search");
    }
};


$("#add-destination").on("click", function(event) {
    event.preventDefault();
    $("#images-view").empty();
    var API_KEY = '9335517-b03c3ef104729c3975acac324';
    let image = $("#destination-input").val().trim();
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(image)
    + "&per_page=15"
    + "&category=travel"
    + "&image_type=photo";
    $.getJSON(URL, function(data){
        for (var i = 0; i < data.hits.length; i++) {
            let url = data.hits[i].webformatURL;
            let id = "images";
            let c = "images";
            $("#images-view").append("<img src=" + url + " id=" + id + " "+ "class=" + c + ">");
        };
    hasImages();
});

});

