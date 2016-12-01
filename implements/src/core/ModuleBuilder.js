(function () {
    var ModuleBuilder = function (options) {
        this.module = null;
        ModuleBuilder.prototype.init.call(this, options);
    };
    _.extend(ModuleBuilder.prototype, {
        init: function (options) {
            var module;
            module = this.createNewModule(options);
            this.createBoxActions(module, options.actions);
            this.module = module;
            return this;
        },
        createNewModule: function (moduleConfig) {
            var module = OneFlux.instantiateFactory("@module", moduleConfig);
            return module;
        },
        createBoxActions: function (newModule, actions) {
            console.log("create");
            var boxActions = OneFlux.instantiateFactory("@boxActions", actions);
            boxActions.setId("$boxActions");
            newModule.addComponent(boxActions.getId(), boxActions);
            return this;
        }
    });
    OneFlux.registerFactory("@moduleBuilder", [], ModuleBuilder);
})();