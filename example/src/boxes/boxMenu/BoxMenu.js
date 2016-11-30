(function () {
    var BoxMenu = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-menu").html());
            this.initMenuItems(options);
            this.on("renderInitBoxHeader", this.render);
            this.on("addMenu", this.addRenderMenuElement);
        },
        initMenuItems: function (options) {
            if (options.items && _.isArray(options.items)) {
                this.addMenuElements(options.items);
            }
            return this;
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderMenuElement", {
                $container: that.$html.find("ul")
            });
            return this;
        },
        addMenuElement: function (jsonMenu) {
            var element;
            if (_.isObject) {
                element = OneFlux.instantiateFactory("@menuElement", jsonMenu);
                this.addComponent(element.getId(), element);
                OneFlux.component(element.getId(), element);
            }
            return element;
        },
        addMenuElements: function (jsonMenuArray) {
            var index;
            if (_.isArray(jsonMenuArray)) {
                for (index = 0; index < jsonMenuArray.length; index += 1) {
                    this.addMenuElement(jsonMenuArray[index]);
                }
            }
            return this;
        },
        addRenderMenuElement: function (jsonMenu) {
            var that = this,
                menu = this.addMenuElement(jsonMenu);
            menu.dispatch("renderMenuElement", {
                $container: that.$html.find("ul")
            });
            return this;
        }
    });

    OneFlux.registerFactory("@boxMenu", [], BoxMenu);
})();