var express = require('express'),
    app = express(),
    http = require('http').Server(app);

app.use(express.static(__dirname + '/implements/build'));

http.listen(4000, function () {
    console.log("App listening on port 4000");
});
