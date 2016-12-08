const _ = require("lodash"),
    Comp = require("./ComponentBase"),
    Cont = require("./ContainerBase");

var OneFlux = {
    containerServices: new Cont(),
    containerFactory: new Cont(),
    containerComponents: new Cont(),
    service: function (alias, obj) {
        var res;
        if (_.isObject(obj)) {
            OneFlux.containerServices.add({
                id: alias,
                type: "service",
                element: obj
            });
        } else {
            res = OneFlux.containerServices.findByKey("id", alias);
            if (res && res.element) {
                res = res.element;
            }
            return res;
        }
    },
    component: function (alias, obj) {
        var res;
        if (_.isObject(obj)) {
            OneFlux.containerComponents.add({
                id: alias,
                element: obj
            });
        } else {
            res = OneFlux.containerComponents.findByKey("id", alias);
            if (res && res.element) {
                res = res.element;
            }
            return res;
        }
    },
    registerFactory: function (alias, services, obj) {
        if (alias && services && obj) {
            OneFlux.containerFactory.add({
                id: alias,
                services: services,
                element: obj
            });
        }
        return this;

    },
    getFactory: function (alias) {
        var res;
        if (alias) {
            res = OneFlux.containerFactory.findByKey("id", alias);
            if (res && res.element) {
                res = res.element;
            }
        }
        return res;
    },
    instantiateFactory: function (alias, options) {
        var res, nval;
        if (alias && options) {
            res = OneFlux.containerFactory.findByKey("id", alias);
            if (res && res.element) {
                res = res.element;
            }
            nval = new res(options);
        }
        return nval;
    },
    extend: {
        container: function (obj) {
            var Container = function (options) {
                Cont.prototype.init.call(this, options);
                Container.prototype.init.call(this, options);
            };
            _.extend(Container.prototype, Cont.prototype);
            _.extend(Container.prototype, obj);
            return Container;

        },
        component: function (obj) {
            var Component = function (options) {
                Comp.prototype.init.call(this, options);
                Component.prototype.init.call(this, options);
            };
            _.extend(Component.prototype, Comp.prototype);
            _.extend(Component.prototype, obj);
            return Component;
        }
    },
    componentBase : Comp,
    containerBase : Cont
};

module.exports = OneFlux;
if (process.title === "browser") {
    window.OneFlux = OneFlux;
}