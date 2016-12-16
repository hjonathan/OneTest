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
            var a = ["http://static1.squarespace.com/static/53960212e4b0d0ce554555d9/54d62db6e4b03ba36a1961f7/578d08e7893fc041832533c4/1471990169967/red-wheels.jpg",
                "http://www.etech-systems.com/assets/images/2991663e56d611caf13ae3e42070f710.jpg",
                "http://ansrcmr.publishpath.com/Websites/ansrcmr/images/process.png",
                "https://martinskemme.files.wordpress.com/2010/09/process.png",
                "http://www.startupbiz.com/wp-content/uploads/2015/11/processes.jpg"
            ];
            this.data.attributes.img = a[Math.floor(Math.random() * 5) + 1];
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
                    "name": that.get("id"),
                    "description": "a description",
                    "token": "token"
                }, function (err, data) {
                    if (!err) {

                    }
                });

                service.newInstance({
                    processID: that.get("id"),
                    "data": {
                        "data": {
                            "type": "instances",
                            "attributes": {
                                "name": "name random",
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

                    }
                });

                Eternity.removeModule("$panelCards");
                Eternity.loadSingleModule("$panelCases");
                OneFlux.component("$panelCases").dispatch("loadCases", {
                    processID: that.get("id")
                });
            });
        }
    });

    OneFlux.registerFactory("@Eternity.element.CardProcess", [], CardProcess);
})();