var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});


    app.listen(3000, function () {
        console.log("Node server running on http://localhost:3000");
    
});
