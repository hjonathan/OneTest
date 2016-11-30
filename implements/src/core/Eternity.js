var Eternity = {
    version: "1.0.0",
    create: function (data) {
        var module = new this.core.ModuleBuilder(data);
        return module;
    }
};

Eternity.extendNamespace = function (path, newClass) {
    var current, pathArray, extension, i;

    if (arguments.length !== 2) {
        throw new Error("Eternity.extendNamespace(): method needs 2 arguments");
    }
    pathArray = path.split('.');
    if (pathArray[0] === 'Eternity') {
        pathArray = pathArray.slice(1);
    }
    current = Eternity;
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
