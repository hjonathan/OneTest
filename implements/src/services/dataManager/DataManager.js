const _ = require("lodash"),
    Store = require("./../../core/Store"),
    Cont = require("./../../core/ContainerBase");

var DataManager = function (options) {
    Cont.prototype.init.call(this, options);
    DataManager.prototype.init.call(this, options);
};

_.extend(DataManager.prototype, Cont.prototype);
_.extend(DataManager.prototype, {
    /**
     * Init the function
     */
    init: function () {

    },
    /**
     * This function create a store based in json
     * @param options
     * @returns {DataManager}
     */
    createStore: function (options) {
        var nSt;
        if (_.isObject(options)) {
            nSt = new Store(options);
            this.add({
                "id": nSt.getId(),
                "store": nSt
            })
        }
        return this;
    },
    /**
     * Get the Store by alias in this class
     * @param alias
     * @returns {*|nSt|boolean|Store|null}
     */
    getStore: function (alias) {
        var st;
        st = this.findByKey("id", alias);
        return st.store;
    },
    /**
     * Add object Store to this class
     * @param st
     * @returns {DataManager}
     */
    addStore: function (st) {
        if (st instanceof Store) {
            this.add({
                id: st.getId(),
                store: st
            })
        }
        return this;
    }
});

module.exports = DataManager;