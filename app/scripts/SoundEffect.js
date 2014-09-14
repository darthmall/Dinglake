/* global Vue, itertools */

'use strict';

(function () {
    var SoundEffect = {
        template: '#soundeffect',
        created: function () {
            var self = this,
                audio = this.files.map(function (v) {
                    var a = new Audio(v);
                    a.addEventListener('playing', onPlaying);
                    a.addEventListener('ended', onEnded);
                    return a;
                }),
                iter = itertools.ringIter(audio),
                key = this.$data.key.toUpperCase();

            this.$data.playcount = 0;

            document.addEventListener('keyup', function (ev) {
                if (String.fromCharCode(ev.which) === key) {
                    iter.next().value.play();
                }
            });

            function onPlaying() {
                self.$data.playing = true;
                ++self.$data.playcount;
            }

            function onEnded() {
                self.$data.playing = false;
                self.$data.played = true;
            }
        }
    };

    Vue.component('sound-effect', SoundEffect);
})();
