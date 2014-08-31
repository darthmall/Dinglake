/* global Random, Dict, ion */
(function ($, exports) {
    'use strict';

    function Dinglake(data) {
        var self = this,
            sounds = [];

        this.bindings = new Dict();

        $(document).keydown(this.onKeyPress.bind(this));

        data.forEach(function (v) {
            var key = v.key.toUpperCase();

            if (self.bindings.has(key)) {
                throw new Error('Bad Configuration: duplicate key binding for "' + v.key + '"');
            }

            v.files.forEach(function (file) {
                sounds.push({ name: file });
            });

            self.bindings.set(key, new Random.Array(v.files));
        });

        ion.sound({
            sounds: sounds,
            path: 'sounds/'
        });
    };

    Dinglake.prototype.onKeyPress = function (ev) {
        var key = String.fromCharCode(ev.which);

        if (this.bindings.has(key)) {
            var sfx = this.bindings.get(key).getNext();

            if (sfx) {
                ion.sound.stop();
                ion.sound.play(sfx);
            }
        }
    };

    exports.Dinglake = Dinglake;
})(jQuery, window);
