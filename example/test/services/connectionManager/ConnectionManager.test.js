describe('ConnectionManager.js', function () {
    var st, con;
    beforeEach(function () {
        con = new Connection();
    });

    it('setPath() -getPath', function (done) {
        con.setPath("login", "login/test/path");
        expect(con.getPath("login")).to.be.equal("login/test/path");
        done();
    });


    it('addDomain() -getDomain', function (done) {
        con.addDomain("login");
        expect(con.getDomain()).to.be.equal("login");
        done();
    });

    it('addKey() - getKey', function (done) {
        con.setKey("login", "login/test/path");
        expect(con.getKey("login")).to.be.equal("login/test/path");
        done();
    });
});