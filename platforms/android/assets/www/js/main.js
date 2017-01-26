var myApiKey = "DEMO_KEY";
var slika;

var _slideshow = new Slideshow();

$(document).ready(function () {
    initApplication();
});
function getDateForImage(dayBefore){
    var date = new Date();
    var dayOfMonth = new Date(new Date().setDate(date.getDate()-dayBefore)).getDate();
    date = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + dayOfMonth;
    return date;
};

function initApplication(days){
    if(days == undefined)
        days = 1;
    var date = getDateForImage(days);
    var url = buildApodUrl(date);
    submitRequest(url);

    _slideshow.init();
};

var days = 1;
function updateTest(){
    var interval = window.setInterval(function () {
        days++;
        initApplication(days);
        window.clearInterval(interval);
    }, 10000);
}

function buildApodUrl(date) {

    var url = "https://api.nasa.gov/planetary/apod";
    url += "?date=" + date + "&api_key=" + myApiKey;
    console.log(url);

    return url;
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

function submitRequest1(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = handleReadyStateChange;
    request.open("GET", url, true);
    request.send();
    return request;
}

function handleReadyStateChange(event) {
    var request = event.target;
    if ((request.readyState == 4) && (request.status == 200)) {
        var response = JSON.parse(request.responseText);
        updateImage(response.url);
        updateTitle(response.title);
        updateDescription(response.explanation);
    }
}

$("#update").click(function() {
    ativity.TestMethod();
 });
function updateImage(url) {
    slika = "'" + url + "'";
    console.log(slika);


    _slideshow.setImage(url);
    _slideshow.startSlideshow();
}

function updateTitle(title) {
    document.getElementById("apod-title").innerHTML = title;
}

function updateDescription(desc) {
    document.getElementById("apod-desc").innerHTML = desc;

}

