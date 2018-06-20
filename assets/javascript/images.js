$("#submit").on("click", function(event) {
    event.preventDefault();
    $("#images-view").empty();
    var API_KEY = '9335517-b03c3ef104729c3975acac324';
    let image = $("#destinaton-input").val().trim();
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(image);
    $.getJSON(URL, function(data){
        for (var i = 0; i < data.hits.length; i++) {
            let url = data.hits[i].previewURL;
            $("#images-view").append("<img src=" + url + ">");
        };
});
});