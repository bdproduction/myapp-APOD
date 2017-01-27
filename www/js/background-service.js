var BackgroundService = function(){

    var isInBackground = false;
    var dailyTimer = null;
    var testTimer = null;
    var _switch = false;
    var timer = null;
    var counter = 0;

    /* Public */
    this.initBackgroundMode = function(){
        //setConfiguration();
        window.plugin.backgroundMode.enable();

        checkIfBackgroundModeActivated();

        // Get informed when the background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function () {
            isInBackground = true;
            setDailyTimer();
        };

        // Get informed when the background mode has been deactivated
        cordova.plugins.backgroundMode.ondeactivate = function () {
            isInBackground = false
            clearInterval(dailyTimer);
            clearInterval(testTimer);
            testTimer= null;
            dailyTimer = null;
        };
    };

    function setDailyTimer(){
        if(dailyTimer == null && dailyTimer == null && isInBackground) {


            var day = 1000*60*60*24;
            dailyTimer = setInterval(function () {
                console.log("running in background");
                getNewImage(1);
            }, day);
        }
    };

    /* Public */
    /*Image URL*/
    this.executeTask = function(url){
        window.plugins.wallpaper.setImageHttp (url);
    };

    /* Private */
    function setConfiguration(){
        window.plugin.backgroundMode.setDefaults({
            title:  "APOD",
            text:   "text...",
            icon: 'icon',
            color: "#555999",
            resume: true,
            hidden: false,
            bigText: true
        })
    };

    /* Private */
    function checkIfBackgroundModeActivated(){
        console.log("backgroundMode " + window.plugin.backgroundMode.isActive());
        return window.plugin.backgroundMode.isActive();
    };

};
