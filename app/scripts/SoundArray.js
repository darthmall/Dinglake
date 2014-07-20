(function ($, exports) {
    'use strict';

    function SoundArray(name, files) {
        this.name = name;
        this.files = files || [];
        this.played = [];
    }

    SoundArray.prototype.size = function () {
        return this.files.length;
    };

    SoundArray.prototype.pickSound = function () {
        if (this.size() < 1) {
            return null;
        }

        return Math.floor(Math.random() * this.size());
    };

    SoundArray.prototype.addSound = function (file) {
        if (!file) {
            throw new Error('Missing file argument');
        }

        this.files.push(file);
    };

    SoundArray.prototype.play = function () {

    };

    SoundArray.prototype.stop = function () {

    };

    window.SoundArray = SoundArray;
})(jQuery, window);
