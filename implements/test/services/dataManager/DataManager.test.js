var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect,
    assert = chai.assert,
    Store = require("./../../../../src/core/Store"),
    Manager = require("./../../../../src/services/dataManager/DataManager");

describe('DataManager.js', function () {
    var st, con;
    beforeEach(function () {
        con = new Manager();
    });

    it('createStore() - getStore()', function (done) {
        var test = {
            id: "myStore",
            state: {
                data: "one"
            }
        };
        con.createStore(test);
        expect(con.getStore("myStore").getState().toObject().data).to.be.equal(test.state.data);
        done();
    });

    it('addStore()', function (done) {
        var nSt,
            test = {
                id: "myStore",
                state: {
                    data: "one"
                }
            };
        nSt = new Store(test);
        con.addStore(nSt);
        expect(con.getStore("myStore").getState().toObject().data).to.be.equal(test.state.data);
        done();
    });
});