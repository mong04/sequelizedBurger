const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: {
        inc: function (value) {
            return parseInt(value) + 1;
        }
    }
}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);

app.listen(app.get('port'));