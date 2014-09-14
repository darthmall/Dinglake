/* global Vue */
(function () {
    'use strict';

    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (data) {
            new Vue({
                el: '#sounds',
                data: { sounds: data }
            });
        }
    });
})();
