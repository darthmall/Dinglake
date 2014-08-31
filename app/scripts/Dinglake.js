/* global Random, Dict, ion */
(function ($, exports) {
    'use strict';

    function Dinglake(data) {
        var self = this,
            sounds = [];

        this.bindings = {
            keyup: new Dict(),
            keydown: new Dict()
        };

        $(document).keydown(this.onKey.bind(this))
            .keyup(this.onKey.bind(this));

        data.forEach(function (v) {
            var key = v.key.toUpperCase(),
                type = v.event || 'keyup';

            if (self.bindings[type].has(key)) {
                throw new Error('Bad Configuration: duplicate key binding for "' + v.key + '"');
            }

            v.files.forEach(function (file) {
                sounds.push({ name: file });
            });

            self.bindings[type].set(key, new Random.Array(v.files));
        });

        ion.sound({
            sounds: sounds,
            path: 'sounds/'
        });
    };

    Dinglake.prototype.onKey = function (ev) {
        var key = String.fromCharCode(ev.which);

        if (this.bindings[ev.type].has(key)) {
            var sfx = this.bindings[ev.type].get(key).getNext();

            if (sfx) {
                ion.sound.stop();
                ion.sound.play(sfx);
            }
        }
    };

    exports.Dinglake = Dinglake;
})(jQuery, window);
