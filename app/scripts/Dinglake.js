(function ($, exports) {
    'use strict';

    function Dinglake(config) {
        this.sounds = {};

        if (config) {
            $.getJSON(config)
                .fail(function () { console.log('Failed to load configuration'); })
                .done(this.loadConfiguration);
        }
    }

    Dinglake.prototype.loadConfiguration = function (data) {
        var sounds = {};

        data.forEach(function (v) {
            var key = v.key.toLowerCase();

            if (sounds.hasOwnProperty(key)) {
                throw new Error('Bad Configuration: duplicate key binding for \'' + v.key + '\'');
            }

            sounds[key] = {};
        });

        this.sounds = sounds;
    };

    exports.Dinglake = Dinglake;
})(jQuery, window);
