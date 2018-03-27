const express = require("express");

const router = express.Router();
// edit burger model to match sequelize
const db = require("../models/");


router.get("/", function (req, res) {
    // send us to the next get function instead.
    res.render("index");
});

router.get("/sitterSignup", function (req, res) {
    // send us to the next get function instead.
    res.render("sitterSignup");
});

router.get("/critterSignup", function (req, res) {
    // send us to the next get function instead.
    res.render("critterSignup");
});

router.post("/api/newsitter", function (req, res) {
    // const sitter = req.body;
    const newSitter = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        zip: req.body.zip
    };
    console.log(req.body);

    db.Sitters.create(newSitter).then((data) => {
        res.json("yo");
    })



});

// get route, edited to match sequelize
router.get("/burgers", function (req, res) {
    // replace old function with sequelize function
    db.Burger.findAll()
        // use promise method to pass the burgers...
        .then(function (dbBurger) {
            console.log(dbBurger);
            // into the main index, updating the page
            var hbsObject = {
                burger: dbBurger
            };
            return res.render("index", hbsObject);
        });
});

// post route to create burgers
router.post("/burgers/create", function (req, res) {
    // edited burger create to add in a burger_name
    db.Burger.create({
            burger_name: req.body.burger_name
        })
        // pass the result of our call
        .then(function (dbBurger) {
            // log the result to our terminal/bash window
            console.log(dbBurger);
            // redirect
            res.redirect("/");
        });
});

// put route to devour a burger
router.put("/burgers/update/:id", function (req, res) {
    // update one of the burgers
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbBurger) {
        res.json("/");
    });
});

module.exports = router;