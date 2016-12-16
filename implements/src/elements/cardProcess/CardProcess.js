(function () {
    var CardProcess = OneFlux.extend.component({
        $html: null,
        template: null,
        init: function (options) {
            var that = this;
            this.template = _.template($("#tpl-eternity-cardprocess").html());
            _.extend(this.data, options);
            this.actionListeners();
            return this;
        },
        actionListeners: function () {
            //this.on("click-" + this.getId(), this.get("options") ? this.get("options").onClick : null);
            this.on("renderPanelCards", this.render);
        },
        render: function (obj) {
            var that = this;
            console.log("yeah very yeah");
            this.$html = $(this.template(this.get("attributes")));
            if (obj && obj.$container) {
                obj.$container.append(this.$html);
            }
            this.attachClick(this.$html);
            return this;
        },
        attachClick: function (dom) {
            var that = this;
            dom.find(".new-case").click(function () {
                var service = OneFlux.service("webServiceManager");
                service.newInstanceStamplay({
                    "access_token": "Gatos",
                    "generalInfo": {}

                }, function (err, data) {
                    if (!err) {
                        console.log("respuesta satisfactoria");
                        console.log(data);
                    }
                });

                service.newInstance({
                    processID: that.get("id"),
                    "data": {
                        "data": {
                            "type": "instances",
                            "attributes": {
                                "name": "a name",
                                "description": "a description",
                                "process_id": that.get("id"),
                                "pin": "1234",
                                "status": "TODO"
                            },
                            "relationships": {}
                        }
                    }
                }, function (err, data) {
                    if (!err) {
                        console.log("respuesta satisfactoria");
                        console.log(data);
                    }
                });

            });
        }
    });

    OneFlux.registerFactory("@Eternity.element.CardProcess", [], CardProcess);
})();