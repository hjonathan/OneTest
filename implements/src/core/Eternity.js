var Eternity = {
    data: {},
    moduleActive: null,
    version: "1.0.0",
    init: function (container) {
        var BoxMain, LoadMask, Login, PanelMain, webService, PanelCards, Bread;
        BoxMain = OneFlux.instantiateFactory("@Eternity.module.Main", {});
        LoadMask = OneFlux.instantiateFactory("@Eternity.module.LoadMask", {});
        Login = OneFlux.instantiateFactory("@Eternity.module.Login", {});
        PanelMain = OneFlux.instantiateFactory("@Eternity.module.PanelMain", {});
        PanelCards = OneFlux.instantiateFactory("@Eternity.module.PanelCards", {});
        Bread = OneFlux.instantiateFactory("@Eternity.module.Breadcrums", {});

        OneFlux.component("$main", BoxMain);
        OneFlux.component("$loadMask", LoadMask);
        OneFlux.component("$login", Login);
        OneFlux.component("$panelMain", PanelMain);
        OneFlux.component("$panelCards", PanelCards);
        OneFlux.component("$breadcrums", Bread);

        BoxMain.addComponent(PanelMain.getId(), PanelMain);

        PanelMain.addComponent(Bread.getId(), Bread);
        PanelMain.addComponent(PanelCards.getId(), PanelCards);

        webService = OneFlux.getFactory("@Eternity.service.WebServiceManager");
        OneFlux.service("webServiceManager", new webService({
            keys: {
                server: "http://localhost:9000",
                "client_id": "4",
                "client_secret": "4NG0IdFc37ygoxgewbw2MaEekah47svIc7YTKhvI"
            },
            token: null,
            lang: null
        }));
        BoxMain.render({
            $container: container
        });
        return this;
    },
    login: function (data) {
        var login = OneFlux.component("$login"),
            main = OneFlux.component("$main");
        main.addComponent(login.getId(), login);
        this.moduleActive = login;
        login.render({
            $container: main.$html
        });
        return this;
    },
    set: function (key, value) {
        this.data[key] = value;
    },
    get: function (key) {
        return this.data[key];
    },
    loadModule: function (alias) {
        var panel,
            main = OneFlux.component("$main");
        this.moduleActive.$html.remove();
        this.moduleActive = OneFlux.component(alias);
        if (this.moduleActive) {
            //main.addComponent(this.moduleActive.getId(), this.moduleActive);
            this.moduleActive.render({
                $container: main.$html
            });
        }
    },
    dispatch: function (channel, obj) {
        var main = OneFlux.component("$main");
        main.dispatch(channel, obj);
    },
    dispatchAsync: function (channel, obj) {
        setTimeout(function () {
            var main = OneFlux.component("$main");
            main.dispatch(channel, obj);
        }, 2000);
    },
    exeAsync: function (callback) {
        setTimeout(function () {
            callback();
        }, 1000);
    }
};