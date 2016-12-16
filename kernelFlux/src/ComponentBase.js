const _ = require("lodash"),
    Event = require("events"),
    uuid = require('node-uuid');

var ComponentBase = function (options) {
    ComponentBase.prototype.init.call(this, options);
};

_.extend(ComponentBase.prototype, {
    init: function (options) {
        var emitter = new Event.EventEmitter();
        _.extend(this, emitter);
        this.data = {};
        this.parent = null;
        this.id = options && options.id ? options.id : uuid.v1();
        this.collection = [];
        return this;
    },
    setId: function (id) {
        this.id = _.isString(id) ? id : this.id;
        return this;
    },
    getId: function () {
        return this.id;
    },
    addComponent: function (alias, el) {
        this.collection.push({
            id: alias,
            component: el
        });
        if (el.setParent) {
            el.setParent(this);
        }
        return this;
    },
    getComponent: function (alias) {
        var el,
            arr = [],
            that = this;

        if (_.isString(alias)) {
            el = _.find(this.collection, function (o) {
                return o.id === alias;
            });
            return el.component;
        }
        if (_.isArray(alias)) {
            _.each(alias, function (value) {
                el = _.find(that.collection, function (o) {
                    return o.id === value;
                });
                arr.push(el.component);
            });
            return arr;
        }
        return null;
    },
    get: function (key) {
        return this.data[key];
    },
    set: function (key, value) {
        this.data[key] = value;
        return this;
    },
    setParent: function (parent) {
        if (_.isObject(parent)) {
            this.parent = parent;
        }
        return this;
    },
    getParent: function () {
        return this.parent;
    },
    dispatch: function (action, obj) {
        this.emit(action, obj);
        _.each(this.collection, function (value, index) {
            if (value.component) {
                value.component.dispatch(action, obj);
            }
        });
        return this;
    },
    dispatchParent: function (action, obj) {
        if (this.parent && this.parent.dispatch) {
            this.parent.dispatch(action, obj);
        }
    }
});

module.exports = ComponentBase;
