(function () {
    var BoxSettings = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-settings").html());
            this.on("renderInitBoxMain", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.attachListeners(this.$html);
            return this;
        },
        attachListeners: function ($objDom) {
            var that = this;
            $objDom.find(".btn-primary").click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                OneFlux.component("$boxMenu").dispatch("addMenu", {
                    id: that.$html.find("#IdDashboard").val(),
                    title: that.$html.find("#NameDashboard").val(),
                    icon: "dashboard",
                    onClick: function () {
                        console.log("Test Box Settings");
                    }
                });
                OneFlux.component("$boxSettings").$html.fadeOut();
            });

            $objDom.find(".btn-danger").click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                OneFlux.component("$boxSettings").$html.fadeOut();
            });
        }
    });

    OneFlux.registerFactory("@boxSettings", [], BoxSettings);
})();