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
