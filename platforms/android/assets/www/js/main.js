var myApiKey = "DEMO_KEY";
var slika;

var _slideshow = new Slideshow();
var _backgroundService = new BackgroundService();

var currentImage = "";

// $(document).ready(function () {
//     initApplication();
// });

$("#update").click(function() {
    _backgroundService.executeTask(currentImage);
});

function initApplication(days){
    navigator.splashscreen.show();
    window.setTimeout(function () {
        navigator.splashscreen.hide();
    }, 3000);

    _backgroundService.initBackgroundMode();

    getNewImage(1);

    _slideshow.init();
};

function getNewImage(days){
    var url = buildApodUrl(days);
}
function buildApodUrl(days) {
    var date = getDateForImage(days);
    var url = "https://api.nasa.gov/planetary/apod";
    url += "?date=" + date + "&api_key=" + myApiKey;
    console.log(url);

    submitRequest(url);
}
function getDateForImage(dayBefore){
    var date = new Date();
    var dayOfMonth = new Date(new Date().setDate(date.getDate()-dayBefore)).getDate();
    date = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + dayOfMonth;
    return date;
}
function submitRequest(url){
    $.ajax({
        type: 'GET',
        url: url
    }).done(function(response) {
        updateImage(response.url);
        updateTitle(response.title);
        updateDescription(response.explanation);
        //updateTest();
    }).fail(function(error){
        console.log('error getting image');
    });
};

function updateTitle(title) {
    document.getElementById("apod-title").innerHTML = title;
}
function updateDescription(desc) {
    document.getElementById("apod-desc").innerHTML = desc;
}

function updateImage(url) {
    slika = "'" + url + "'";
    console.log(slika);

    _slideshow.setImage(url);
    _slideshow.startSlideshow();

    currentImage = url;
}

