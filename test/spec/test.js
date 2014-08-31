/* global describe, expect, it, before, after, afterEach, jQuery, sinon, Dinglake, Random, Dict */

(function () {
    'use strict';

    describe('Random', function () {
        var samples = 1000;

        function isWholeNumber(x) {
            var y = Math.floor(x);

            return x - y === 0;
        }

        function isInRange(lower, upper) {
            return function (x) {
                return x >= lower && x <= upper;
            };
        }

        describe('#range()', function () {
            var values = [];

            before(function () {
                for (var i = 0; i < 1000; ++i) {
                    values.push(Random.range(10));
                }
            });

            it('generates random numbers given a range', function () {
                for (var i = 0; i < 1000; ++i) {
                    expect(Random.range(5, 10)).to.be.at.least(5).and.at.most(10);
                }
            });

            it('generates random numbers given an upper bound', function () {
                expect(values.every(isInRange(0, 10))).to.be.true;
            });

            it('can generate negative and positive numbers', function () {
                for (var i = 0; i < 1000; ++i) {
                    expect(Random.range(-5, 5)).to.be.at.least(-5).and.at.most(5);
                }
            });

            it('can generate all negative numbers', function () {
                for (var i = 0; i < 1000; ++i) {
                    expect(Random.range(-10, -5)).to.be.at.least(-10).and.at.most(-5);
                }
            })

            it('generates whole numbers by default', function () {
                expect(values.every(isWholeNumber)).to.be.true;
            });

            it('can generate floating point numbers', function () {
                var sawFloat = false;

                for (var i = 0; i < 1000; ++i) {
                    if (!isWholeNumber(Random.range(2, false))) {
                        sawFloat = true;
                        break;
                    }
                }

                expect(sawFloat).to.be.true;
            });

            it('ensures a valid range', function () {
                var f = function () { return Random.range(10, 0); };
                expect(f).to.throw(Error);
            });

            it('is NaN with no arguments', function () {
                var nan = Random.range();
                expect(nan).to.be.a('number');
                expect(isNaN(nan)).to.be.true;
            });

            it('returns 0 when the bounds are the same', function () {
                expect(Random.range(0)).to.equal(0);
            });
        });

        describe('#shuffle()', function () {
            var source = [0, 1, 2, 3, 4];

            it('doesn\'t modify the source array', function () {
                for (var j = 0; j < samples; ++j) {
                    Random.shuffle(source);

                    for (var i = 0, lim = source.length; i < lim; ++i) {
                        expect(source[i]).to.equal(i);
                    }
                }
            });

            it('returns an array', function () {
                expect(Random.shuffle(source)).to.be.an.instanceOf(Array);
            });

            it('contains all the same values as the source array', function () {
                for (var j = 0; j < samples; ++j) {
                    expect(Random.shuffle(source)).to.have.members(source);
                }
            });

            it('doesn\'t add new values', function () {
                for (var j = 0; j < samples; ++j) {
                    expect(source).to.have.members(Random.shuffle(source));
                }
            });

            it('is the same length as the source array', function () {
                for (var j = 0; j < samples; ++j) {
                    expect(Random.shuffle(source)).to.have.length(source.length);
                }
            });

            it('is a different order than the source array', function () {
                var reordered = false;

                for (var j = 0; j < samples; ++j) {
                    var shuffled = Random.shuffle(source);

                    for (var i = 0; i < shuffled.length; ++i) {
                        if (shuffled[i] !== source[i]) {
                            reordered = true;
                            break;
                        }
                    }
                }

                expect(reordered).to.be.true;
            });

            it('returns an empty array with no arguments', function () {
                expect(Random.shuffle()).to.be.an.instanceOf(Array)
                    .and.to.be.empty;
            });
        });

        describe('Array', function () {

        });

    });

    describe('Dinglake', function () {
        describe('The constructor', function () {
            var dl;

            before(function () {
                sinon.spy(jQuery, 'getJSON');

                dl = new Dinglake('config.json');
            });

            it('loads the configuration once', function () {
                expect(jQuery.getJSON.callCount).to.equal(1);
            });

            it('hashes characters to sounds', function () {
                expect(dl.sounds).to.be.an.instanceOf(Dict);
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

            it('convert uppercase key bindings to uppercase', function () {
                var dl = new Dinglake();
                var config = [{ key: 'a' }];

                dl.loadConfiguration(config);

                expect(dl.sounds).to.have.property('A');
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

})();
