(function () {
    var Login = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-login").html());
            this.set("options", options);
            return this;
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
        attachClick: function ($html) {
            $html.find("[type=submit]").click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                var service = OneFlux.service("webServiceManager");
                service.login({
                    username: $("#et-user").val(),
                    password: $("#et-pw").val()
                }, function (err, data) {
                    if (!err) {
                        service.setKeys(data);
                        Eternity.loadModule("$panelMain");
                        Eternity.exeAsync(function () {
                            service.processes(function (err, data) {
                                if (!err) {
                                    console.log("llegue al async del processes");
                                    console.log(data);
                                    Eternity.dispatch("loadProcesses", data);
                                }
                            })
                        });
                    }

                });
            });
        }
    });

    OneFlux.registerFactory("@Eternity.module.Login", [], Login);
})();