(function (exports) {

    var itertools = {};

    itertools.ringIter = function (collection) {
        var idx = -1,
            lim = collection.length;

        return {
            next: function () {
                idx = (++idx) >= lim ? 0 : idx;

                return {
                    value: collection[idx],
                    done: false
                };
            }
        };
    };

    itertools.randomIter = function (collection) {
        
    };

    exports.itertools = itertools;

})(window);
