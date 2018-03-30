var sitterController = require('../controllers/sitterController');

module.exports = function(app, passport){
    app.get('/sitters', sitterController.getAllSitters );
};