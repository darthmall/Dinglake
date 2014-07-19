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

            it('creats a map of sounds', function () {
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

                expect(dl.sounds.a).to.be.a('SoundArray');
            });
        });
    });

    describe('SoundArray', function () {
        var sfx;

        describe('The constructor', function () {
            before(function () {
                sfx = new SoundArray('test', [1,2,3]);
            });

            it('plays sounds randomly by default', function () {
                expect(sfx.random).to.be.true;
            });

            it('has a name', function () {
                expect(sfx.name).to.equal('test');
            });
        });

        describe('#pickSound()', function () {

        });

        describe('#addSound()', function () {

        });

        describe('#removeSound()', function () {

        });

        describe('#play()', function () {

        });

        describe('#stop()', function () {

        });
    });

})();
