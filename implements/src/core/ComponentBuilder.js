(function () {
    var ComponentBuilder = function (options) {
        ComponentBuilder.prototype.init.call(this, options);
    };
    _.extend(ComponentBuilder.prototype, {
        init: function (options) {
            _.extend(this.options, options);
            return this;
        },
        createComponents: function () {

        },
        createModels: function () {

        }
    });
    Eternity.extendNamespace("Eternity.core.ComponentBuilder", ComponentBuilder);
})();