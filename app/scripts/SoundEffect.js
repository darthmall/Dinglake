/* global Vue, itertools */

'use strict';

(function () {
    var SoundEffect = {
        template: '#soundeffect',
        created: function () {
            var self = this,
                audio = this.files.map(function (v) {
                    var a = new Audio(v);
                    a.addEventListener('ended', onEnded);
                    a.addEventListener('timeupdate', onUpdate(a));
                    return a;
                }),
                iter = itertools.ringIter(audio),
                key = this.$data.key.toUpperCase(),
                current;

            this.$data.hx = [];
            this.$data.playing = false;

            this.$root.$on('playbackStarted', function (data) {
                if (data.name !== self.$data.name && current) {
                    stop();
                }
            });

            document.addEventListener('keyup', function (ev) {
                if (current && ev.which === 27) {
                    stop();
                } else if (String.fromCharCode(ev.which) === key) {
                    current = iter.next().value;

                    self.$data.hx.push(current.src);
                    self.$data.playing = current.src;

                    current.play();
                    self.$dispatch('playbackStarted', { name: self.$data.name, audio: current });
                }
            });

            function stop() {
                current.pause();
                current.currentTime = 0;
                onEnded();
            }

            function onEnded() {
                self.$data.playing = false;
                self.$data.played = true;
                current = null;
            }

            function onUpdate(a) {
                return function () {
                    self.$dispatch('playbackProgress', { progress: a.currentTime / a.duration });
                };
            }

        },

        computed: {
            playcount: function () {
                return this.$data.hx.length;
            }
        }
    };

    Vue.component('sound-effect', SoundEffect);
})();
