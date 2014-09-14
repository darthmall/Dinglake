/* global Vue */
(function () {
    'use strict';

    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (data) {
            new Vue({
                el: '#main',
                data: { sounds: data },
                created: function () {
                    var self = this;

                    this.$data.progress = 0;

                    this.$on('playbackProgress', function (data) {
                        self.$data.progress = data.progress * 100;
                    });
                },
                computed: {
                    showProgress: function () {
                        return this.$data.progress > 0 && this.$data.progress < 100;
                    }
                }
            });
        }
    });
})();
