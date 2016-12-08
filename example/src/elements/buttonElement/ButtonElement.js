(function () {
    var ButtonElement = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-button-element").html());
            this.set("options", options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("renderButtonElement", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template(this.get("options")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.attachClick(this.$html);
            return this;
        },
        attachClick: function (objDom) {
            var that = this;
            objDom.click(function (event) {
                that.dispatch("click-" + that.getId(), {
                    event: event
                });
            });
        }
    });

    OneFlux.registerFactory("@buttonElement", [], ButtonElement);
})();