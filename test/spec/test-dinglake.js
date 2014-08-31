/* global describe, expect, Dinglake, Random */

(function () {
    describe('Dinglake', function () {
        describe('The constructor', function () {
            it('converts uppercase key bindings to uppercase', function () {
                var dl = new Dinglake([{ key: 'a', files: [] }]);

                expect(dl.bindings.keyup.has('A')).to.be.ok;
            });

            it('prevents multiple bindings to the same key', function (){
                var dl;
                var badConfig = [{ key: 'a', files: [] }, { key: 'a', files: [] }];
                var loadConfiguration = function () { dl = new Dinglake(badConfig); };

                expect(loadConfiguration).to.throw(Error);
                expect(dl).to.be.an('undefined');
            });

            it('handles non-alphanumeric key bindings', function () {
                var dl = new Dinglake([{ key: '%', files: [] }]);

                expect(dl.bindings.keyup.has('%')).to.be.ok;
            });

            it('creates Random.Array objects', function () {
                var dl = new Dinglake([{
                    key: 'a',
                    name: 'A',
                    files: []
                }]);

                expect(dl.bindings.keyup.get('A')).to.be.an.instanceOf(Random.Array);
            });
        });

        describe('Key bindings', function () {
            var keyup = jQuery.Event('keyup'),
                keydown = jQuery.Event('keydown');

            before(function () {


                sinon.stub(ion.sound, 'play');
                sinon.stub(ion.sound, 'stop');
            });

            beforeEach(function () {
                keydown.which = 'A'.charCodeAt(0);
                keyup.which = 'S'.charCodeAt(0);
            });

            afterEach(function () {
                ion.sound.play.reset();
                ion.sound.stop.reset();
                $(document).off('keyup').off('keydown');
            });

            after(function () {
                ion.sound.play.restore();
                ion.sound.stop.restore();
            });

            it('responds to keydown', function () {
                var dl = new Dinglake([{
                    name: 'a',
                    key: 'a',
                    event: 'keydown',
                    files: ['keydown']
                }, {
                    name: 'b',
                    key: 's',
                    event: 'keyup',
                    files: ['keyup']
                }]);

                $(document).trigger(keydown);

                assert(ion.sound.play.calledWithMatch('keydown'));
            });

            it('responds to keyup', function () {
                var dl = new Dinglake([{
                    name: 'a',
                    key: 'a',
                    event: 'keydown',
                    files: ['keydown']
                }, {
                    name: 'b',
                    key: 's',
                    event: 'keyup',
                    files: ['keyup']
                }]);
                $(document).trigger(keyup);

                assert(ion.sound.play.calledWithMatch('keyup'));
            });

            it('defaults to keyup', function () {
                var dl = new Dinglake([{
                    name: 'one',
                    key: 'A',
                    files: ['one']
                }]);

                keyup.which = keydown.which;

                $(document).trigger(keydown);
                expect(ion.sound.play.callCount).to.equal(0);

                $(document).trigger(keyup);
                expect(ion.sound.play.calledOnce).to.be.true;
            });

            it('allows different sounds to be triggered for different events on the same key', function () {
                var dl = new Dinglake([{
                    name: 'one',
                    key: 'A',
                    event: 'keyup',
                    files: ['keyup']
                }, {
                    name: 'two',
                    key: 'A',
                    event: 'keydown',
                    files: ['keydown']
                }]);

                keyup.which = keydown.which;

                $(document).trigger(keyup);
                expect(ion.sound.play.callCount).to.equal(1);
                assert(ion.sound.play.calledWith('keyup'));

                $(document).trigger(keydown);
                expect(ion.sound.play.callCount).to.equal(2);
                assert(ion.sound.play.calledWith('keydown'));
            });
        });
    });
})();
