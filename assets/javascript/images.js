
function hasImages() {
    if ($('#images').length > 0) {
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
            $("#images-view").append("<a " 
            + " href=" 
            + url 
            + " data-fancybox='images'><img src=" 
            + url 
            + " id=" 
            + id 
            + "></a>");
        };
    hasImages();
    let destination = image.split(',');
    let country = destination.pop().trim();
    console.log(country);
    let state = "https://www.state.gov/api/v1/?command=get_country_fact_sheets&fields=site_url,title,terms&terms=" + country + ":any,:any";
    console.log(state);
    $.getJSON(state, function(response){
        console.log(response);
        for (var a = 0; a < response.country_fact_sheets.length; a++) {
            let siteURL = response.country_fact_sheets[a].site_url;
            console.log(siteURL);
            $("#fact-sheet-view").empty();
            $("#fact-sheet-view").append(
                "<a target=" + "_blank"
                + " href=" + siteURL + ">"
                + "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Seal_of_the_United_States_Department_of_State.svg/1024px-Seal_of_the_United_States_Department_of_State.svg.png"
                + " style=" + "width:100px;height:100px;>" + "</a>"
                + "<a target=" + "_blank"
                + " href=" 
                + siteURL 
                + ">State Department Fact Sheet: " 
                + country 
                + "</a>");
        };    
    });
});



});

