(function () {
    var Comp = OneFlux.componentBase;
    var Module = function (options) {
        Comp.prototype.init.call(this, options);
        Module.prototype.init.call(this, options);
    };
    _.extend(Module.prototype, Comp.prototype);
    _.extend(Module.prototype, {
        init: function (options) {
            _.extend(this.options, options);
            return this;
        }
    });
    OneFlux.registerFactory("@module", [], Module);
})();