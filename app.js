var express = require('express'),
    app = express(),
    argv = require('yargs').argv,
    http = require('http').Server(app);

var prj = "implements";
if (argv.p && argv.p !== "") {

}

app.use(express.static(__dirname + '/' + prj + '/build'));

http.listen(4000, function () {
    console.log("App listening on port 4000");
});
