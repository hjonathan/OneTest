(function () {
    var TableCases = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-tablecases").html());
            this.templateRow = _.template($("#tpl-eternity-tablerow").html());

            _.extend(this.data, options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            //this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("renderPanelCases", this.render);
            this.on("loadTableCases", this.renderCases);
        },
        render: function (obj) {
            console.log("El template de la tabla");
            var that = this;
            this.$html = $(this.template(this.data));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            //this.attachClick(this.$html);
            return this;
        },
        renderCases: function (obj) {
            console.log("En el render de los casos");
            console.log(obj);
            var index;
            for (index = 0; index < obj.data.length; index++) {
                this.$html.find("tbody").append($(this.templateRow(obj.data[index])))
            }
        },
        attachClick: function (dom) {
            var that = this;
            dom.find(".new-case").click(function () {

            });
        }
    });

    OneFlux.registerFactory("@Eternity.element.TableCases", [], TableCases);
})();