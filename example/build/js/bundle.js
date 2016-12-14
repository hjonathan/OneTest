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
(function () {
    var Widget = OneFlux.getFactory("@widget");

    var DatatableWidget = function (options) {
        Widget.call(this, options);
        this.template = _.template($("#tpl-widget-datatable").html());
        this.datatable = null;
        DatatableWidget.prototype.init.call(this, options);
    };

    DatatableWidget.prototype = new Widget();

    _.extend(DatatableWidget.prototype, {
        init: function (options) {
            _.extend(this.data, options);
        },
        _renderGraphic: function () {
            var dat;
            if (!this.datatable) {
                dat = $(this.template());
                $(this.dom.content).append(dat);
                this.datatable = dat.DataTable(this.get("data"));
            }
            return this;
        }
    });

    OneFlux.registerFactory("@datatableChart", [], DatatableWidget);
})();
(function () {
	var Widget = OneFlux.getFactory("@widget");

	var PieChart = function (options) {
		Widget.call(this, options);
	};

	PieChart.prototype = new Widget();

	_.extend(PieChart.prototype, {
		_getFormattedData: function () {
			return [{
				values: this.get("data").map(function (item) {
					return item.value;
				}),
				labels: this.get("data").map(function (item) {
					return item.label || "";
				}),
				type: 'pie'
			}];
		}
	});

	OneFlux.registerFactory("@piechart", [], PieChart);
})();
(function () {
	var Widget = OneFlux.getFactory("@widget");

	var BarChart = function (options) {
		Widget.call(this, options);
		this._orientation = null;
	};

	BarChart.prototype = new Widget();

	_.extend(BarChart.prototype, {
		init: function (options) {
			options = _.extend({
				orientation: 'v'
			}, options);

			this.setOrientation(options.orientation);
		},
		setOrientation: function (orientation) {
			if (orientation !== 'h' && orientation !== 'v') {
				throw new Error('setOrientation(): The parameter must be "v" or "h"');
			}
			this.set("orientation", orientation);
			// TODO: redrawn graphic
			return this;
		},
		_getFormattedData: function () {
			var that = this;
			return this.get("data").map(function (item) {
				return {
	                type: "bar",
	                orientation: that.get("orientation"),
	                x: item.x,
	                y: item.y
	            }
			});
		}
	});

	OneFlux.registerFactory("@barchart", [], BarChart);
})();
(function () {
	var Widget = OneFlux.getFactory("@widget");

	var ScatterChart = function (options) {
		Widget.call(this, options);
	};

	ScatterChart.prototype = new Widget();

	ScatterChart.MODE = {
		LINE: 'lines',
		MARKER: 'markers',
		LINEMARKER: 'lines+makers'
	};

	_.extend(ScatterChart.prototype, {
		_getFormattedData: function () {
			return this.get("data").map(function (item) {
				return {
					type: "scatter",
					mode: item.mode,
					x: item.x,
					y: item.y,
					name: item.name
				}
			});
		}
	});

	OneFlux.registerFactory("@scatterchart", [], ScatterChart);
})();
(function () {
    var SettingWidgetElement = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-setting-widget-element").html());
            this.set("options", options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("renderSettingWidgetElement", this.render);
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

    OneFlux.registerFactory("@settingWidgetElement", [], SettingWidgetElement);
})();