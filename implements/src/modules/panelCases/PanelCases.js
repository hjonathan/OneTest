(function () {
    var PanelCases = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-panelcases").html());
            _.extend(this.data, options);
            return this;
        },
        actionListeners: function () {
            //this.on("render-action-element", this.render);
            this.on("loadCases", this.loadCases);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template(this.data));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            /*this.dispatch("renderPanelMain", {
             $container: this.$html
             });*/
            return this;
        },
        loadCases: function (obj) {
            var ws = OneFlux.service("webServiceManager");
            ws.
            return this;
        }
    });

    OneFlux.registerFactory("@Eternity.module.PanelCases", [], PanelCases);
})();