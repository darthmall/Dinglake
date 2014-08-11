(function (exports) {
    'use strict';
    var prefix = '\0';

    function Dict() {
        if (!(this instanceof Dict)) {
            return new Dict();
        }

        this.contents = {};
    }

    Dict.prototype.set = function (key, value) {
        this.contents[prefix + key] = value;

        return this;
    };

    Dict.prototype.get = function (key) {
        return this.contents[prefix + key];
    };

    Dict.prototype.has = function (key) {
        return this.contents.hasOwnProperty(prefix + key);
    };

    exports.Dict = Dict;
})(window);
