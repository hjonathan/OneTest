(function () {
    var BoxWidgetSettings = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            this.template = _.template($("#tpl-box-widget-settings").html());
            this.initSettings(options);
            this.on("renderInitWidget", this.render);
            this.on("addSettingWidget", this.addRenderSettingElement);
        },
        initSettings: function (options) {
            if (options && _.isArray(options)) {
                this.addSettingWidgetElements(options);
            }
            return this;
        },
        render: function (obj) {
            var that = this;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.dispatch("renderSettingWidgetElement", {
                $container: that.$html
            });
            return this;
        },
        addSettingWidgetElement: function (jsonSetting) {
            var element;
            if (_.isObject) {
                element = OneFlux.instantiateFactory("@settingWidgetElement", jsonSetting);
                this.addComponent(element.getId(), element);
            }
            return element;
        },
        addSettingWidgetElements: function (settingsArray) {
            var index;
            if (_.isArray(settingsArray)) {
                for (index = 0; index < settingsArray.length; index += 1) {
                    this.addSettingWidgetElement(settingsArray[index]);
                }
            }
            return this;
        },
        addRenderSettingElement: function (jsonMenu) {
            var that = this,
                setting = this.addSettingWidgetElement(jsonMenu);
            setting.dispatch("renderSettingWidgetElement", {
                $container: that.$html
            });
            return this;
        }
    });

    OneFlux.registerFactory("@boxWidgetSettings", [], BoxWidgetSettings);
})();