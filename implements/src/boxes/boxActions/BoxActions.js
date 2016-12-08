(function () {
    var BoxActions = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-actions").html());
            this.addActions(options);
            this.actionListeners();
        },
        actionListeners: function () {
            this.on("module-render", this.render);
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("render-action-element", {
                $container: that.$html.find("ul")
            });
            return this;
        },
        addAction: function (action) {
            var element;
            if (_.isObject(action)) {
                element = OneFlux.instantiateFactory("@actionElement", action);
                this.addComponent(element.getId(), element);
            }
            return element;
        },
        addActions: function (actions) {
            var index;
            if (_.isArray(actions)) {
                for (index = 0; index < actions.length; index += 1) {
                    this.addAction(actions[index]);
                }
            }
            return this;
        }
        /*
         addRendeElement: function (jsonMenu) {
         var that = this,
         menu = this.addMenuElement(jsonMenu);
         menu.dispatch("renderMenuElement", {
         $container: that.$html.find("ul")
         });
         return this;
         }*/
    });

    OneFlux.registerFactory("@boxActions", [], BoxActions);
})();