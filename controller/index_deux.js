const express = require("express");

const router = express.Router();
// edit sitter model to match sequelize
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
        res.json("You've Been Added To The List of Sitters");
    })



});

// // get route, edited to match sequelize
// router.get("/Sitters", function (req, res) {
//     // replace old function with sequelize function
//     db.Sitters.findAll()
//         // use promise method to pass the sitters...
//         .then(function (dbSitter) {
//             console.log(dbSitter);
//             // into the main index, updating the page
//             var hbsObject = {
//                 Sitter: dbSitter
//             };
//             return res.render("index", hbsObject);
//         });
// });

// // post route to create sitters
// router.post("/sitters/create", function (req, res) {
//     // hmmm...don't think this is needed
//     db.Sitter.create({
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             password: req.body.password,
//             zip: req.body.zip
//         })
//         // pass the result of our call
//         .then(function (dbSitter) {
//             // log the result to our terminal/bash window
//             console.log(dbSitter);
//             // redirect
//             res.redirect("/");
//         });
// });

// // put route
// router.put("/sitterss/update/:id", function (req, res) {
//     // update sitter info
//     db.Sitters.update({
     
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbBurger) {
//         res.json("/");
//     });
// });

module.exports = router;