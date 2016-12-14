var Eternity = {
    version: "1.0.0",
    login: function (data) {
        //var module = OneFlux.instantiateFactory("@moduleBuilder", data);
        console.log("jonas");
        var module = OneFlux.instantiateFactory("@Eternity.module.login", data);
        return module;
    }
};