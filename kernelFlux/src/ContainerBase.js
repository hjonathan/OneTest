const _ = require("lodash"),
    Event = require("events"),
    Emitter = new Event.EventEmitter();

var ContainerBase = function (options) {
    ContainerBase.prototype.init.call(this, options);
};

_.extend(ContainerBase.prototype, Emitter);
_.extend(ContainerBase.prototype, {
    init: function (options) {
        this.collection = [];
        return this;
    },
    add: function (obj) {
        this.collection.push(obj);
        return this;
    },
    findByKey: function (key, alias) {
        var el;
        if (_.isString(alias)) {
            el = _.find(this.collection, function (o) {
                if (o[key]) {
                    return o[key] === alias;
                }
            });
        }
        return el;
    },
    find: function (callback) {
        var el;
        if (_.isFunction(callback)) {
            el = _.find(this.collection, callback);
        }
        return el;
    }
});

module.exports = ContainerBase;