(function () {
    var BoxButtons = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-buttons").html());
            this.initButtonsItems(options);
            this.on("renderInitBoxHeader", this.render);
            this.on("addButtonSettings", this.addRenderButtonElement);
        },
        initButtonsItems: function (options) {
            if (options.items && _.isArray(options.items)) {
                this.addButtonElements(options.items);
            }
            return this;
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderButtonElement", {
                $container: that.$html
            });
            return this;
        },
        addButtonElement: function (jsonButton) {
            var element;
            if (_.isObject) {
                element = OneFlux.instantiateFactory("@buttonElement", jsonButton);
                this.addComponent(element.getId(), element);
            }
            return element;
        },
        addButtonElements: function (jsonButtonArray) {
            var index;
            if (_.isArray(jsonButtonArray)) {
                for (index = 0; index < jsonButtonArray.length; index += 1) {
                    this.addButtonElement(jsonButtonArray[index]);
                }
            }
            return this;
        },
        addRenderButtonElement: function (jsonButton) {
            var that = this,
                button = this.addButtonElement(jsonButton);
            button.dispatch("renderButtonElement", {
                $container: that.$html
            });
            return this;
        }
    });

    OneFlux.registerFactory("@boxButtons", [], BoxButtons);
})();