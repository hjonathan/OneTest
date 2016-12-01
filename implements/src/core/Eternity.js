var Eternity = {
    version: "1.0.0",
    create: function (data) {
        var module = OneFlux.instantiateFactory("@moduleBuilder", data);
        return module.module;
    }
};