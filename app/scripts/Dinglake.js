/* global Random, Dict */
(function ($, exports) {
    'use strict';

    function Dinglake(config) {
        $.getJSON(config)
            .fail(function () { console.log('Failed to load configuration'); })
            .then(this.loadConfiguration.bind(this))
            .then(this.createUI.bind(this));

        $(document).keydown(this.onKeyPress.bind(this));
    }

    Dinglake.prototype.loadConfiguration = function (data) {
        var self = this,
            sounds = [];

        this.sounds = new Dict();

        data.forEach(function (v) {
            var key = v.key.toLowerCase();

            if (self.sounds.has(key)) {
                throw new Error('Bad Configuration: duplicate key binding for \'' + v.key + '\'');
            }

            v.files.forEach(function (file) {
                sounds.push({ name: file });
            });

            self.sounds.set(key, new Random.Array(v.files));
        });

        ion.sound({
            sounds: sounds,
            path: 'sounds/'
        });
    };

    Dinglake.prototype.createUI = function () {

    };

    Dinglake.prototype.onKeyPress = function (ev) {
        var key = String.fromCharCode(ev.which).toLowerCase();

        if (this.sounds.has(key)) {
            var sfx = this.sounds.get(key).getNext();

            if (sfx) {
                ion.sound.stop();
                ion.sound.play(sfx);
            }
        }
    };

    exports.Dinglake = Dinglake;
})(jQuery, window);
