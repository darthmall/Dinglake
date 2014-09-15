/* global Vue */

'use strict';

(function () {
    Vue.filter('keycode', function (value) {
        var code = value.charCodeAt(0),
            arrows = ['←', '↑', '→', '↓'];

        if (code < 37 || code > 40) {
            return value.toUpperCase();
        }

        return arrows[code - 37];
    });

    Vue.filter('filename', function (value) {
        var toks = String(value).split('/');

        return value ? toks[toks.length - 1] : '';
    });
})();
