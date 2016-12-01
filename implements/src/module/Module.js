(function () {
    var Comp = OneFlux.componentBase;
    var Module = function (options) {
        this.$html = null;
        this.template = _.template($("#tpl-module").html());
        Comp.prototype.init.call(this, options);
        Module.prototype.init.call(this, options);
    };
    _.extend(Module.prototype, Comp.prototype);
    _.extend(Module.prototype, {
        init: function (options) {
            _.extend(this.options, options);
            this.actionsListeners();
            return this;
        },
        actionsListeners: function () {
            this.on("module-render-init", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template(this.get("options")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("module-render", {
                $container: that.$html
            });
            return this;
        }
    });
    OneFlux.registerFactory("@module", [], Module);
})();