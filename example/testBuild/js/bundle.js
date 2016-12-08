var Menu = {
    id: "myMenu",
    name: "MyNameMenu",
    items: [
        {
            id: "myMenuElement1",
            title: "Processmaker",
            icon: "dashboard",
            onClick: function () {
                project.action("activateDashboard", "myDashboardOne");
            }
        },
        {
            id: "myMenuElement2",
            title: "Sales Dashboard",
            icon: "products",
            onClick: function () {
                project.action("activateDashboard", "myDashboardTwo");
            }
        }
    ]
};
var ButtonsItems = {
    id: "myButtons",
    name: "MyNameButton",
    items: [
        {
            id: "myButtonElement1",
            title: "+",
            icon: "sum",
            onClick: function () {
                OneFlux.component("$boxSettings").$html.slideDown("slow", function () {
                    // Animation complete.
                });
            }
        }
    ]
};
var dash = [
    {
        id: "myDashboardOne",
        active: true,
        description: "my description for the widget",
        widgets: [
            {
                "type": "@piechart",
                "id": "050bc330-ad98-11e6-b17d-c5ff60d5df74",
                "title": "",
                "x": 0,
                "y": 0,
                "width": 6,
                "height": 6,
                data: [
                    {
                        label: "Argentina",
                        value: 60
                    },
                    {
                        label: "Bolivia",
                        value: 50
                    },
                    {
                        label: "Chile",
                        value: 40
                    }
                ],
                settings: [
                    {
                        id: "settingWidget1",
                        title: "uno",
                        icon: "dashboard",
                        onClick: function () {
                            console.log("setting widget 1");
                        }
                    }
                ]
            },
            {
                "type": "@datatableChart",
                "id": "050bc330-ad98-11e6-b17d-c5ff60d5df77",
                "title": "",
                "x": 7,
                "y": 0,
                "width": 6,
                "height": 6,
                data: {
                    data: [
                        ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
                        ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
                        ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
                        ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
                        ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
                        ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
                        ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
                        ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
                        ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
                        ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
                        ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
                        ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
                        ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
                        ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
                        ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
                        ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
                        ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
                        ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
                        ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
                        ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
                        ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
                        ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
                        ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
                        ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
                        ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
                        ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
                        ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
                        ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
                        ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
                        ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
                        ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
                        ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
                        ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
                        ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
                        ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
                        ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
                    ],
                    columns: [
                        {title: "Name"},
                        {title: "Position"},
                        {title: "Office"},
                        {title: "Extn."},
                        {title: "Start date"},
                        {title: "Salary"}
                    ]
                }
            },
            {
                type: "@barchart",
                title: "Bar Chart",
                width: 6,
                height: 5,
                x: 0,
                y: 7,
                orientation: 'h',
                data: {
                    y: [2005, 2006, 2007, 2008, 2009],
                    x: [9, 10, 3, 6, 7]
                }
            },
            {
                type: "@scatterchart",
                title: "Bar Chart",
                width: 6,
                height: 5,
                x: 7,
                y: 7,
                data: [
                    {
                        x: [1, 2, 3, 4],
                        y: [12, 9, 15, 12],
                        mode: 'lines+markers',
                        name: 'Something'
                    },
                    {
                        x: [1, 2, 3, 4],
                        y: [6, 3, 5, 8],
                        mode: 'lines',
                        name: 'Anything'
                    },
                    {
                        x: [1, 2, 3, 4],
                        y: [8, 12, 3, 1],
                        mode: 'markers',
                        name: 'Other thing'
                    }
                ]
            }
        ]
    },
    {
        id: "myDashboardTwo",
        active: false,
        description: "my description for the widget",
        widgets: [
            {
                "type": "@piechart",
                "id": "050bc330-ad98-11e6-b17d-c5ff60d5df75",
                "title": "",
                "x": 0,
                "y": 0,
                "width": 6,
                "height": 6,
                data: [
                    {
                        label: "Argentina",
                        value: 60
                    },
                    {
                        label: "Bolivia",
                        value: 50
                    },
                    {
                        label: "Chile",
                        value: 40
                    }
                ]
            }
        ]
    }
];

var PMDashboard = {
    version: "1.0.0"
};

PMDashboard.extendNamespace = function (path, newClass) {
    var current,
        pathArray,
        extension,
        i;

    if (arguments.length !== 2) {
        throw new Error("Dynaform.extendNamespace(): method needs 2 arguments");
    }

    pathArray = path.split('.');
    if (pathArray[0] === 'PMDashboard') {
        pathArray = pathArray.slice(1);
    }
    current = PMDashboard;

    // create the 'path' namespace
    for (i = 0; i < pathArray.length - 1; i += 1) {
        extension = pathArray[i];
        if (typeof current[extension] === 'undefined') {
            current[extension] = {};
        }
        current = current[extension];
    }

    extension = pathArray[pathArray.length - 1];
    if (current[extension]) {

    }
    current[extension] = newClass;
    return newClass;
};

(function (argument) {
    var Comp = OneFlux.componentBase;

    var Dashboard = function (options) {
        Comp.prototype.init.call(this, options);
        this._cellHeight = null;
        this.html = null;
        this._columns = null;
        this._gridHandler = null;
        this._onChangeHandler = null;
        this._onAddWidgetHandler = null;
        this._widgets = [];
        Dashboard.prototype.init.call(this, options);
    };
    _.extend(Dashboard.prototype, Comp.prototype);
    _.extend(Dashboard.prototype, {
        init: function (options) {
            options = _.extend({
                cellHeight: 100,
                columns: 12,
                onChangeHandler: null,
                onAddWidgetHandler: null,
                widgets: []
            }, options);

            _.extend(this.data, options);

            this.setCellHeight(options.cellHeight)
                .addWidgets(options.widgets);
            this._columns = options.columns;
            this.on("renderDashboard-" + this.getId(), this.render)
        },
        setCellHeight: function (cellHeight) {
            if (typeof cellHeight !== 'number') {
                throw new Error('cellHeight(): The parameter must be a number');
            }
            this._cellHeight = cellHeight;
            if (this._gridHandler) {
                this._gridHandler.cellHeight(cellHeight);
            }
            return this;
        },
        removeWidget: function (widget) {
            var targetIndex = this._getWidgetIndex(widget),
                targetWidget;

            if (targetIndex >= 0) {
                targetWidget = this._widgets[targetIndex];
                if (this._gridHandler) {
                    this._gridHandler.removeWidget(targetWidget.id, true);
                }
                this._widgets.splice(targetIndex, 1);
            }

            return this;
        },
        _updateWidgetProperties: function (id, data) {
            var widget = this.getComponent(id),
                resized;

            if (data._dirty) {
                resized = widget.getWidth() !== data.width || widget.getHeigth() !== data.height;

                widget._x = data.x;
                widget._y = data.y;
                widget._width = data.width;
                widget._height = data.height;

                if (resized) {
                    widget._renderGraphic();
                }
            }
            return this;
        },
        _onChange: function () {
            return this;
        },
        clear: function () {
            if (this._gridHandler) {
                this._gridHandler.removeAll();
            }
            this._widgets = [];
            return this;
        },
        render: function (obj) {
            var html = document.createElement('div'),
                that = this;

            obj.$container.append(html);
            html.className = 'grid-stack';

            this._gridHandler = jQuery(html).gridstack({
                // cellHeight: this._cellHeight,
                width: this._columns
                //float: true
            }).on('change', function (e, items) {
                items = items || [];
                items.forEach(function (item, index) {
                    if (item._dirty) {
                        that._updateWidgetProperties(item.id, item);
                    }
                });
            }).on('added', function (e, items) {
                var widget = that.getComponent(items[0].id);
                widget._renderGraphic();
            }).data('gridstack');

            this.html = html;

            this.addWidgetsToGridStack(this.collection);
            jQuery(html).gridstack({
                width: 12
            });

            return this;
        },
        addWidget: function (widget) {
            var element;
            if (!(widget instanceof OneFlux.getFactory("@widget"))) {
                element = OneFlux.instantiateFactory(widget.type, widget);
                this.addComponent(element.getId(), element);
            } else {
                this.addComponent(widget.getId(), widget);
            }
            return element;
        },
        addWidgets: function (widgetsArray) {
            var index;
            this.clear();
            if (_.isArray(widgetsArray)) {
                for (index = 0; index < widgetsArray.length; index += 1) {
                    this.addWidget(widgetsArray[index]);
                }
            }
            return this;
        },
        addWidgetsToGridStack: function (widgets) {
            var index, widget;
            if (this._gridHandler) {
                this.clear();
                if (_.isArray(widgets)) {
                    for (index = 0; index < widgets.length; index += 1) {
                        widget = widgets[index].component;
                        this._gridHandler.addWidget(
                            $(widget.render().html),
                            widget.get("x"),
                            widget.get("y"),
                            widget.get("width"),
                            widget.get("height"),
                            (isNaN(widget.get("x")) && isNaN(widget.get("y"))),
                            null, null, null, null,
                            widget.getId());
                    }
                }
            }
        }
    });
    OneFlux.registerFactory("@dashboard", [], Dashboard);
})();
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
    var Comp = OneFlux.componentBase;

    var Widget = function (options) {
        Comp.prototype.init.call(this, options);
        this.title = null;
        this._x = null;
        this._y = null;
        this._width = null;
        this._height = null;
        this._onChangeSize = null;
        this.dom = {};
        Widget.prototype.init.call(this, options);
    };
    _.extend(Widget.prototype, Comp.prototype);
    _.extend(Widget.prototype, {
        init: function (options) {
            options = _.extend({
                title: "",
                x: 0,
                y: 0,
                width: 1,
                height: 1
            }, options);

            _.extend(this.data, options);

            this.setTitle(options.title);
            this._x = options.x;
            this._y = options.y;
            this._width = options.width;
            this._height = options.height;

            var boxSettings = OneFlux.instantiateFactory("@boxWidgetSettings", options.settings ? options.settings : {});
            this.addComponent(boxSettings.getId(), boxSettings);
        },
        setTitle: function (title) {
            if (typeof title !== 'string') {
                throw new Error('setTitle(): The parameter must be a string.');
            }
            this._title = title;
            if (this.html) {
                this.render();
            }
            return this;
        },
        getTitle: function () {
            return this._title;
        },
        // setWidth: function (width) {
        //     if (typeof width !== 'number') {
        //         throw new Error('setWidth(): The parameter must be a number.');
        //     }
        //     this._width = width;
        //     if (this.el) {
        //         //this.el.setAttribute('data-gs-width', this._width);
        //         this._dashboard.resizeWidget(this, width, this._height);
        //     }
        //     return this;
        // },
        // setHeight: function (height) {
        //     if (typeof height !== 'number') {
        //         throw new Error('setHeight(): The parameter must be a number.');
        //     }
        //     this._height = height;
        //     if (this.el) {
        //         this.el.setAttribute('data-gs-height', this._height);
        //     }
        //     return this;
        // },
        getX: function () {
            return this._x;
        },
        getY: function () {
            return this._y;
        },
        getWidth: function () {
            return this._width;
        },
        getHeigth: function () {
            return this._height;
        },
        getData: function () {
            return {
                id: this.id,
                title: this._title,
                x: this._x,
                y: this._y,
                width: this._width,
                height: this._height
            };
        },
        _getFormattedData: function () {},
        _renderGraphic: function () {
            var width =  $(this.dom.body).width(),
                height = $(this.dom.body).height();

            Plotly.newPlot(this.dom.content, this._getFormattedData(), {
                width: width,
                height: height,
                margin: {
                    t: 20, r: 20, b: 20, l:20
                }
            }, {
                displaylogo: false
            });
            return this;
        },
        render: function () {
            var widget,
                header,
                body;

            if (!this.html) {
                widget = document.createElement('article');
                header = document.createElement('header');
                body = document.createElement('div'),
                    content = document.createElement('div');

                this.dom = {
                    header: header,
                    body: body,
                    content: content
                };

                widget.className = 'pmdashboard-widget grid-stack-item-content';
                header.className = 'pmdashboard-widget-header';
                body.className = 'pmdashboard-widget-content';

                body.appendChild(content);
                widget.appendChild(header);
                widget.appendChild(body);

                this.html = document.createElement('div');
                this.html.className = 'pmdashboard-widget-container';
                this.html.id = this.id;
                // next line is necessary to avoid a bug
                this.html.style.position = 'absolute';

                this.html.appendChild(widget);
            }

            this.dom.header.textContent = this._title;

            this.dispatch("renderInitWidget", {
                $container: $(this.dom.header)
            })
            return this;
        }
    });

    OneFlux.registerFactory("@widget", [], Widget);
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
		this._data = null;
		PieChart.prototype.init.call(this, options);
	};

	PieChart.prototype = new Widget();

	_.extend(PieChart.prototype, {
		init: function (options) {
			options = _.extend({
				data: []
			}, options);

			this.setData(options.data);
		},
		setData: function (data) {
			this._data = {};

			this._data.labels = data.map(function (item) {
				return item.label || "";
			});

			this._data.values = data.map(function (item) {
				return item.value;
			});
			return this;
		},
		_renderGraphic: function () {
			var width =  $(this.dom.body).width(),
				height = $(this.dom.body).height();

			Plotly.newPlot(this.dom.content, [{
				values: this._data.values,
				labels: this._data.labels,
				type: 'pie'
			}], {
				width: width,
				height: height,
				margin: {
					t: 20, r: 20, b: 20, l:20
				}
			}, {
				displaylogo: false
			});
			return this;
		}
	});

	OneFlux.registerFactory("@piechart", [], PieChart);
})();
(function () {
	var Widget = OneFlux.getFactory("@widget");

	var BarChart = function (options) {
		Widget.call(this, options);
		this._orientation = null;
		BarChart.prototype.init.call(this, options);
	};

	BarChart.prototype = new Widget();

	_.extend(BarChart.prototype, {
		init: function (options) {
			options = _.extend({
				data: {
					x: [],
					y: []
				},
				orientation: 'v'
			}, options);

			this.setOrientation(options.orientation)
				.setData(options.data);
		},
		setData: function (data) {
			this._data = data;
			return this;
		},
		setOrientation: function (orientation) {
			if (orientation !== 'h' && orientation !== 'v') {
				throw new Error('setOrientation(): The parameter must be "v" or "h"');
			}
			this._orientation = orientation;
			// TODO: redrawn graphic
			return this;
		},
		_renderGraphic: function () {
			var width =  $(this.dom.body).width(),
				height = $(this.dom.body).height();

			Plotly.newPlot(this.dom.content, [{
                type: "bar",
                orientation: this._orientation,
                text: "asdd", //TODO: What is this for?
                x: this._data.x,
                y: this._data.y
            }], {
				width: width,
				height: height,
				margin: {
					t: 20, r: 20, b: 20, l:20
				}
			}, {
				displaylogo: false
			});
			return this;
		}
	});

	OneFlux.registerFactory("@barchart", [], BarChart);
})();
(function () {
	var Widget = OneFlux.getFactory("@widget");

	var ScatterChart = function (options) {
		Widget.call(this, options);
		this._mode = null;
		ScatterChart.prototype.init.call(this, options);
	};

	ScatterChart.prototype = new Widget();

	ScatterChart.MODE = {
		LINE: 'lines',
		MARKER: 'markers',
		LINEMARKER: 'lines+makers'
	};

	_.extend(ScatterChart.prototype, {
		init: function (options) {
			options = _.extend({
				data: []
			}, options);

			this.setData(options.data);
		},
		setData: function (data) {
			if (!_.isArray(data)) {
				throw new Error('setData(): The parameter must be an array.');
			}
			this._data = data;
			return this;
		},
		_getFormattedData: function () {
			return this._data.map(function (item) {
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
(function () {
    var BoxDashboard = OneFlux.extend.component({
        init: function (arrayDash) {
            this.template = _.template($("#tpl-box-dashboard").html());
            this.initDashboardItems(arrayDash);
            this.on("renderInitBoxMain", this.render);
            this.on("addDashboard", this.addDashboard);
            this.on("activateDashboard", this.activateDashboard);
        },
        findDashboardByKey: function (key, value) {
            var el = _.find(this.collection, function (o) {
                return o.component[key] === value;
            });
            return el.component;
        },
        addDashboard: function (jsonDash) {
            var element, index = 0;
            if (_.isObject(jsonDash)) {
                element = OneFlux.instantiateFactory("@dashboard", jsonDash);
                this.addComponent(element.getId(), element);
            }
            return element;
        },
        addDashboards: function (jsonDashArray) {
            var index;
            if (_.isArray(jsonDashArray)) {
                for (index = 0; index < jsonDashArray.length; index += 1) {
                    this.addDashboard(jsonDashArray[index]);
                }
            }
            return this;
        },
        initDashboardItems: function (arrayDash) {
            if (arrayDash && _.isArray(arrayDash)) {
                this.addDashboards(arrayDash);
            }
            return this;
        },
        render: function (obj) {
            var that = this,
                activeDash;
            this.$html = $(this.template());
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            return this;
        },
        activateDashboard: function (idDashboard) {
            var that = this,
                activeDash;
            this.$html.empty();
            this.dispatch("renderDashboard-" + idDashboard, {
                $container: that.$html
            });
            return this;
        }
    });

    OneFlux.registerFactory("@boxDashboard", [], BoxDashboard);
})();

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
(function () {
    var MenuElement = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-menu-element").html());
            this.set("options", options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("renderMenuElement", this.render);
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

    OneFlux.registerFactory("@menuElement", [], MenuElement);
})();
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
(function () {
    var Project = function (options) {
        this.boxMain = null;
        Project.prototype.init.call(this, options);
    };

    _.extend(Project.prototype, {
        init: function (options) {
            this.boxMain = this.initBoxMain();
            this.initBoxSettings();
            this.initBoxHeader();
            this.initBoxDashboard();
            this.initBoxMenu();
            this.initBoxButtons();

            return this;
        },
        initBoxMain: function () {
            var box = OneFlux.instantiateFactory("@boxMain", {});
            OneFlux.component("$boxMain", box);
            return box;
        },
        initBoxHeader: function () {
            var box = OneFlux.instantiateFactory("@boxHeader", {});
            OneFlux.component("$boxHeader", box);
            this.boxMain.addComponent("$boxHeader", box);
            return box;
        },
        initBoxDashboard: function () {
            var box = OneFlux.instantiateFactory("@boxDashboard", dash);
            OneFlux.component("$boxDashboard", box);
            this.boxMain.addComponent("$boxDashboard", box);
            return box;
        },
        initBoxMenu: function () {
            var header,
                box = OneFlux.instantiateFactory("@boxMenu", Menu);
            OneFlux.component("$boxMenu", box);
            header = OneFlux.component("$boxHeader");
            header.addComponent("$boxmenu", box);
            return box;
        },
        initBoxButtons: function () {
            var header,
                box = OneFlux.instantiateFactory("@boxButtons", ButtonsItems);
            OneFlux.component("$boxButtons", box);
            header = OneFlux.component("$boxHeader");
            header.addComponent("$boxButtons", box);
            return box;
        },
        initBoxSettings: function () {
            var main,
                box = OneFlux.instantiateFactory("@boxSettings", {});
            OneFlux.component("$boxSettings", box);
            this.boxMain.addComponent("$boxSettings", box);
            return box;
        },
        render: function () {
            var that = this;
            this.boxMain.dispatch("renderInitProject", {
                $container: $("#app-container")
            });
            return this;
        },
        addMenu: function (obj) {
            var boxMenu = OneFlux.component("$boxMenu");
            boxMenu.dispatch("addMenu", obj);
        },
        action: function (action, obj) {
            var resp;
            if (_.isString(action)) {
                resp = this.boxMain.dispatch(action, obj);
            }
            return resp;
        }
    });
    PMDashboard.extendNamespace("PMDashboard.core.Project", Project);
})();