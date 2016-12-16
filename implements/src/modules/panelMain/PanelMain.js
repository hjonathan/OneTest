(function () {
    var PanelMain = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-panelmain").html());
            this.set("options", options);
            return this;
        },
        actionListeners: function () {
            //this.on("render-action-element", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template(this.get("options")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderPanelMain", {
                $container: this.$html
            });
            this.attachEvents(this.$html);
            return this;
        },
        attachEvents: function (dom) {
            var that = this;
            dom.find("#processes-load").click(function () {
                Eternity.removeModule("$panelCards");
                Eternity.removeModule("$panelCards");
                Eternity.loadModule("$panelMain");
                Eternity.loadProcess();
            });
        }
    });

    OneFlux.registerFactory("@Eternity.module.PanelMain", [], PanelMain);
})();