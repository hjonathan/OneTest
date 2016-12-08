(function () {
    var BoxHeader = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-header").html());
            this.on("renderInitBoxMain", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderInitBoxHeader", {
                $container: that.$html
            });
            return this;
        }
    });

    OneFlux.registerFactory("@boxHeader", [], BoxHeader);
})();