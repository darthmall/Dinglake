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
        var self = this;

        data.forEach(function (v) {
            if (self.sounds.hasOwnProperty(v.key)) {
                throw new Error('Bad Configuration: duplicate key binding for \'' + v.key + '\'');
            }
        });


    };

    exports.Dinglake = Dinglake;
})(jQuery, window);
