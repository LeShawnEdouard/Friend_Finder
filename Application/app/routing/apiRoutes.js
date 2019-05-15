// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


module.exports = function(app) {

    
    // ---------------------------------------------------------------------------
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  

    // ---------------------------------------------------------------------------
  
  app.post("/api/friends", function(req, res) {
console.log(req.body);
    var userScore = req.body.scores;
    for 
    }
  });
};