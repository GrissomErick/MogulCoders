const express = require("express");
const bodyParser = require("body-parser");

// bring in the models
const db = require("./models");

const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controller/index.js");

app.use("/", routes);



// listen on port 3000
const port = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(port);
});


console.log(module.exports);