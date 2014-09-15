/* global Vue */
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

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
                    var self = this,
                        current;

                    this.$data.progress = 0;

                    function update() {
                        if (!current) {
                            return;
                        }

                        self.$data.progress = current.currentTime / current.duration * 100;

                        if (self.$data.progress < 100 && !current.paused) {
                            window.requestAnimationFrame(update);
                        } else {
                            current = null;
                        }
                    }

                    this.$on('playbackStarted', function (data) {
                        current = data.audio;
                        update();
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
