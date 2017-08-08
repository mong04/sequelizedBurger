const express = require('express');
var router = express.Router();
var db = require('../models')

router.get("/", function (req, res) {
    db.burgers.findAll()
    .then(function(data) {
        var hbsObject = { burgers: data};
        res.render('index', hbsObject);
    });
});

router.post("/", function (req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    })
    .then(function() {
        res.redirect('/');
    });
});

router.put("/:id", function (req, res) {
    db.burgers.update({
        devoured: true
    }, {
        where: {id: req.params.id}
    })
    .then(function() {
        res.redirect('/');
    });
});

module.exports = router;