var db = require("../models");
var user = db.user;

module.exports = function(app){
    app.get('/sitters', function(req, res) {
        user.findAll( { where: { isSitter: true } } )
            .then(function(results){
                res.json(results);
            });
    });
};