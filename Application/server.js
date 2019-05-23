// Dependencies
var express = require("express");
// var path = require("path");

// Set our port to 8080
var PORT = process.env.PORT || 8080;

// Create our server
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// We point our server to our route files.
// These routes give our server a "map" of how to respond when users visit or request data from various URL.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Code used to start our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});