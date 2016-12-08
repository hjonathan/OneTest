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