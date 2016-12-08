(function () {
    var BoxActions = function (options) {
        BoxActions.prototype.init.call(this, options);
    };
    _.extend(BoxActions.prototype, {
        init: function (options) {
            _.extend(this.options, options);
            this.createComponents(options.components);
            return this;
        },
        createActions: function (actions) {
            var index;
            if (_.isArray(actions)) {
                for (index = 0; index < actions.length; index += 1) {
                    this.createAction(actions[index]);
                }
            }
            return this;
        },
        createAction: function (action) {
            var comp = new Eternity.core.ComponentBuilder(action);
            return comp;
        },
        createModels: function () {

        }
    });
    OneFlux.registerFactory("Eternity.core.ModuleBuilder", ModuleBuilder);
})();