/* global describe, expect, it, before, after, afterEach, jQuery, sinon, Dinglake, SoundArray */

(function () {
    'use strict';

    describe('Dinglake', function () {
        describe('The constructor', function () {
            before(function () {
                sinon.spy(jQuery, 'getJSON');
            });

            it('loads the configuration once', function () {
                new Dinglake('config.json');

                expect(jQuery.getJSON.callCount).to.equal(1);
            });

            it('accepts an empty arguments array', function () {
                new Dinglake();

                expect(jQuery.getJSON.called).to.be.false;
            });

            it('hashes characters to sounds', function () {
                var dl = new Dinglake();
                expect(dl.sounds).to.be.a('object');
            });

            afterEach(function () {
                jQuery.getJSON.reset();
            });

            after(function () {
                jQuery.getJSON.restore();
            });
        });

        describe('#loadConfiguration()', function () {

            it('is a function', function () {
                var dl = new Dinglake();
                expect(dl.loadConfiguration).to.be.a('function');
            });

            it('prevents multiple bindings to the same key', function (){
                var dl = new Dinglake();
                var badConfig = [{ key: 'a' }, { key: 'a' }];
                var loadConfiguration = function () { dl.loadConfiguration(badConfig); };

                expect(loadConfiguration).to.throw(Error);
                expect(dl.sounds).not.to.have.property('a');
            });

            it('convert uppercase key bindings to lowercase', function () {
                var dl = new Dinglake();
                var config = [{ key: 'A' }];

                dl.loadConfiguration(config);

                expect(dl.sounds).to.have.property('a');
            });

            it('handles non-alphanumeric key bindings', function () {
                var dl = new Dinglake();
                var config = [{ key: '%' }];

                dl.loadConfiguration(config);

                expect(dl.sounds).to.have.property('%');
            });

            it('overwrites the current configuration', function () {
                var dl = new Dinglake();
                dl.loadConfiguration([{ key: 'a' }]);
                dl.loadConfiguration([{ key: 'b' }]);

                expect(dl.sounds).to.have.property('b').and.not.to.have.property('a');
            });

            it('creates SoundArray objects', function () {
                var dl = new Dinglake();
                dl.loadConfiguration([{
                    key: 'a',
                    name: 'A',
                    files: []
                }]);

                expect(dl.sounds.a).to.be.an.instanceOf(SoundArray);
            });
        });
    });

    describe('SoundArray', function () {
        describe('The constructor', function () {
            it('has a name', function () {
                var sfx = new SoundArray('test', [1,2,3]);
                expect(sfx.name).to.equal('test');
            });

            it('allows construction with no sound files', function () {
                expect(new SoundArray('test', [])).to.be.ok;
            });

            it('creates a SoundArray object', function () {
                expect(new SoundArray('test', [])).to.be.an.instanceOf(SoundArray);
            });
        });

        describe('#size()', function () {
            it('is a function', function () {
                var sfx = new SoundArray('test');
                expect(sfx).to.respondTo('size');
            });

            it('returns 0 for an empty array', function () {
                var sfx = new SoundArray('test', []);

                expect(sfx.size()).to.equal(0);
            });

            it('returns 0 if the files argument was omitted', function () {
                var sfx = new SoundArray('test');

                expect(sfx.size()).to.equal(0);
            });

            it('returns the correct number of sound effects files', function () {
                var sfx = new SoundArray('test', [1,2,3]);

                expect(sfx.size()).to.equal(3);
            });
        });

        describe('#pickSound()', function () {
            it('returns a valid index into the files array', function () {
                var sfx = new SoundArray('test', [1,2,3]);
                expect(sfx.pickSound()).to.be.at.least(0).and.at.most(2);
            });

            it('returns null if the files array is empty', function () {
                var sfx = new SoundArray('test', []);

                expect(sfx.pickSound()).to.be.null;
            });

            it('returns the same sound if only one sound file is provided', function () {
                var sfx = new SoundArray('test', [1]);

                sfx.pickSound();
                expect(sfx.pickSound()).to.equal(0);
            });

            it('picks each sound once before repeating a sound', function () {
                var sounds = [1,2,3];
                var playCounts = [0,0,0];
                var sfx = new SoundArray('test', sounds);
                var lim = sounds.length;

                // FIXME: This is not a valid test because occasionally it could
                // randomly pick each sound once.
                for (var i = 0; i < lim; ++i) {
                    ++playCounts[sfx.pickSound()];
                }

                playCounts.forEach(function (count) {
                    expect(count).to.equal(1);
                });
            });

            it('repeats a sound once all sounds have been played', function () {
                var sounds = [1,2,3];
                var playCounts = [0,0,0];
                var sfx = new SoundArray('test', sounds);
                var lim = sounds.length + 1;
                var playedTwiceCount = 0;

                // FIXME: This is not a valid test because occasionally it could
                // randomly pick each sound once.
                for (var i = 0; i < lim; ++i) {
                    ++playCounts[sfx.pickSound()];
                }

                for (i = 0; i < playCounts.length; ++i) {
                    if (playCounts[i] > 1) {
                        ++playedTwiceCount;
                    }
                }

                expect(playedTwiceCount).to.equal(1);
            });
        });

        describe('#addSound()', function () {
            var sfx = new SoundArray('test', [1,2]);

            it('requires an argument', function () {
                expect(sfx.addSound).to.throw(Error);
            });

            it('adds the argument to the array of sound files', function () {
                sfx.addSound(3);

                expect(sfx.size()).to.equal(3);
                expect(sfx.files).to.include(3);
            });
        });

        describe('#removeSound()', function () {
            // FIXME
        });

        describe('#play()', function () {
            // FIXME
        });

        describe('#stop()', function () {
            // FIXME
        });
    });

})();
