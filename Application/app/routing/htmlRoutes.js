// Path varialbe used to get the correct file path for our html
var path = require("path");




module.exports = function(app) {

  // GET request used to handle when a user visits the page
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // This is a default if no matching route is undefined
  app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};