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