/* global Dinglake, Vue */
(function () {
    'use strict';

    Vue.filter('keycode', function (value) {
        var code = value.charCodeAt(0),
            arrows = ['←', '↑', '→', '↓'];

        if (code < 37 || code > 40) {
            return value.toUpperCase();
        }

        return arrows[code - 37];
    });

    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (data) {
            new Dinglake(data);
            new Vue({
                el: '#sounds',
                data: { sounds: data }
            });
        }
    });
})();
