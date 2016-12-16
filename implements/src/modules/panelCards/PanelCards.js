(function () {
    var PanelCards = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-panelcards").html());
            this.set("options", options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            //this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("loadProcesses", this.loadProcesses);
            this.on("renderPanelMain", this.render);
        },
        render: function (obj) {
            var that = this;
            console.log("render del panel cards");
            this.$html = $(this.template(this.get("options")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            //this.attachClick(this.$html);
            return this;
        },
        loadProcesses: function (data) {
            var index;
            for (index = 0; index < data.data.length; index++) {
                this.loadProcess(data.data[index]);
            }
            console.log("renderPanelCards");
            this.dispatch("renderPanelCards", {
                $container: this.$html
            });
        },
        loadProcess: function (process) {
            var pr;
            pr = OneFlux.instantiateFactory("@Eternity.element.CardProcess", process);
            this.addComponent(pr.getId(), pr);
            return pr;
        }
    });
    OneFlux.registerFactory("@Eternity.module.PanelCards", [], PanelCards);
})();