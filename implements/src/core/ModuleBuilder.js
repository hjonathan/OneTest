(function () {
    var ModuleBuilder = function (options) {
        ModuleBuilder.prototype.init.call(this, options);
    };
    _.extend(ModuleBuilder.prototype, {
        init: function (options) {
            _.extend(this.options, options);
            return this;
        },
        createComponents: function () {

        },
        createModels: function () {

        }
    });
    Eternity.extendNamespace("Eternity.core.ModuleBuilder", ModuleBuilder);
})();