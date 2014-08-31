(function (exports) {
    'use strict';
    var prefix = '\0',
        prefixCharCode = prefix.charCodeAt(0);

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

    Dict.prototype.forEach = function (callback) {
        for (var key in this.contents) {
            if (key.charCodeAt(0) === prefixCharCode) {
                callback(key.substring(1), this.contents[key]);
            }
        }
    };

    Dict.prototype.items = function () {
        var items = [];

        this.forEach(function (k, v) {
            items.push({ key: k, value: v });
        });

        return items;
    };

    exports.Dict = Dict;
})(window);
