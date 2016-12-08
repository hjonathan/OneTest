var registeredActionObjects = {},
    defaultObjectCreator = function (data) {
        return data;
    };

var Action = {
    registerAction: function (name, objectCreator) {
        if (typeof name !== 'string' || !name) {
            throw new Error("registerAction(): \"name\" parameter is required");
        }
        if (!objectCreator || typeof objectCreator !== 'function') {
            throw new Error('registerAction(): second parameter must be a function.')
        }
        objectCreator = objectCreator || defaultObjectCreator;
        registeredActionObjects[name] = objectCreator;
    },
    executeAction: function (name, payload) {
        if (registeredActionObjects[name]) {
            let actionObject = {
                type: name,
                data: registeredActionObjects[name](payload)
            };
            ActionBus.dispatch(actionObject);
        }
    }
};


module.exports = Action;