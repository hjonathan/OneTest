(function () {
    var BoxMain = OneFlux.extend.component({
        template: null,
        nameBoxHeader: "$boxHeader",
        $html: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-main").html());
            this.$html = null;
            this.on("renderInitProject", this.render);
            return this;
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template({}));
            if (obj) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderInitBoxMain", {
                $container: that.$html
            });
            return this;
        },
        append: function ($html) {
            if (this.$html) {
                this.$html.append($html);
            }
            return this;
        }
    });

    OneFlux.registerFactory("@boxMain", [], BoxMain);
})();
