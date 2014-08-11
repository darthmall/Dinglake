(function (exports) {
    'use strict';
    
    var Random = {};

    /**
     * Return a random number within the specified range.
     */
    Random.range = function (lower, upper, integer) {
        if (arguments.length < 3) {
            if (arguments.length === 1) {
                upper = lower;
                lower = 0;
                integer = true;
            } else {
                if ((typeof upper) === 'boolean') {
                    integer = upper;
                    upper = lower;
                    lower = 0;
                } else {
                    integer = true;
                }
            }
        }

        if (lower > upper) {
            throw new Error('Invalid range [' + lower + ',' + upper + ']');
        }

        var x = lower + Math.random() * (upper - lower);

        if (integer) {
            x = Math.floor(x);
        }

        return x;
    };

    Random.shuffle = function (source) {
        var dst = [],
            supply = source && source.slice(0);

        while (supply && supply.length > 0) {
            var choice = Random.range(supply.length);

            dst.push(supply[choice]);
            supply.splice(choice, 1);
        }

        return dst;
    };

    /**
     * Array-like object providing random access to contents.
     */
    Random.Array = function (contents) {
        if (!(this instanceof Random.Array)) {
            return new Random.Array(contents);
        }

        if (contents instanceof Array) {
            this.contents = contents;
        } else if (typeof contents !== 'undefined') {
            this.contents = [contents];
        } else {
            this.contents = [];
        }

        this._resetQueue();
    };

    Random.Array.prototype.push = function (item) {
        this.contents.push(item);

        this.queue.splice(Random.range(this.queue.length), 0, item);
    };

    Random.Array.prototype.getNext = function () {
        if (this.queue.length < 1) {
            this._resetQueue();
        }

        return this.queue.shift();
    };

    Random.Array.prototype._resetQueue = function () {
        var supply = this.contents.slice(0);

        this.queue = [];

        while (supply.length > 0) {
            var choice = Random.range(supply.length);

            this.queue.push(supply[choice]);
            supply.splice(choice, 1);
        }
    };

    exports.Random = Random;
})(window);
