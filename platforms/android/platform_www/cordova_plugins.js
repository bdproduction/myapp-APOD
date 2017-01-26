cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-wallpaper.wallpaper",
        "file": "plugins/cordova-plugin-wallpaper/www/wallpaper.js",
        "pluginId": "cordova-plugin-wallpaper",
        "clobbers": [
            "wallpaper"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-wallpaper": "0.1.0"
};
// BOTTOM OF METADATA
});