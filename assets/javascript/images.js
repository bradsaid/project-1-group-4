$("#add-destination").on("click", function(event) {
    event.preventDefault();
    $("#images-view").empty();
    var API_KEY = '9335517-b03c3ef104729c3975acac324';
    let image = $("#destination-input").val().trim();
    console.log(image)
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(image)
    +"&image_type=photo"
    +"&category=travel"+"&order=popular"
    +"&per_page=15";
    $.getJSON(URL, function(data){
        for (var i = 0; i < data.hits.length; i++) {
            let url = data.hits[i].webformatURL;
            let id = "images"
            $("#images-view").append("<img src=" + url + " id=" + id + ">");
        };
});
});

