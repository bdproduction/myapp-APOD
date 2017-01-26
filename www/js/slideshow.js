/**
 * Created by Ivan on 1/24/2017.
 */

"use strict";
!function () {
    function t(t) {
        this.el = t;
        for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++)e.call(this, n[i])
    }

    function n(t, n, i) {
        Object.defineProperty ? Object.defineProperty(t, n, {get: i}) : t.__defineGetter__(n, i)
    }

    if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
        var i = Array.prototype, e = i.push, s = i.splice, o = i.join;
        t.prototype = {
            add: function (t) {
                this.contains(t) || (e.call(this, t), this.el.className = this.toString())
            }, contains: function (t) {
                return -1 != this.el.className.indexOf(t)
            }, item: function (t) {
                return this[t] || null
            }, remove: function (t) {
                if (this.contains(t)) {
                    for (var n = 0; n < this.length && this[n] != t; n++);
                    s.call(this, n, 1), this.el.className = this.toString()
                }
            }, toString: function () {
                return o.call(this, " ")
            }, toggle: function (t) {
                return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
            }
        }, window.DOMTokenList = t, n(Element.prototype, "classList", function () {
            return new t(this)
        })
    }
}();

var Slideshow = function () {
    this.$body = document.querySelector('body');

    // Settings.
    this.settings = {
        // Images (in the format of 'url': 'alignment').
        images: [],
        // Delay.
        delay: 6000
    };

    this.curImage = "";

    this.setImage = function(image){
        this.curImage = image;
    };

    this.getImage = function(){
        return this.curImage;
    };
    this.init = function(){
        this.$body.classList.add('is-loading');
    };

    this.startSlideshow = function(){
        // Vars.
        var pos = 0, lastPos = 0,
            $wrapper, $bgs = [], $bg,
            k, v;

        // Create BG wrapper, BGs.
        $wrapper = document.createElement('div');
        $wrapper.id = 'bg';
        this.$body.appendChild($wrapper);

        $bg = document.createElement('div');
        $bg.style.backgroundImage = 'url("' + this.getImage() + '")';
        $bg.style.backgroundPosition = 'center';
        $wrapper.appendChild($bg);

        // Add it to array.
        $bgs.push($bg);

        // Main loop.
        $bgs[pos].classList.add('visible');
        $bgs[pos].classList.add('top');

        window.setInterval(function () {

            lastPos = pos;
            pos++;

            // Wrap to beginning if necessary.
            if (pos >= $bgs.length)
                pos = 0;

            // Swap top images.
            $bgs[lastPos].classList.remove('top');
            $bgs[pos].classList.add('visible');
            $bgs[pos].classList.add('top');

        }, this.settings.delay);

        this.$body.classList.remove('is-loading');
    };
};