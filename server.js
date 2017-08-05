// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
var db = require('./models');

// Set Up Express
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

// Set Up Express-Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: {
        // create global helper to increment @index on page
        inc: function (value) {
            return parseInt(value) + 1;
        }
    }
}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});