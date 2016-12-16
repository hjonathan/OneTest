(function () {
    var Main = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-mainbox").html());
            this.set("options", options);
            //this.actionListeners();
            return this;
        },
        actionListeners: function () {
            //this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            //this.on("render-action-element", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template(this.get("options")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            //this.attachClick(this.$html);
            return this;
        }
    });

    OneFlux.registerFactory("@Eternity.module.Main", [], Main);
})();