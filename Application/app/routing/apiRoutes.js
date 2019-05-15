// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friendsData");


module.exports = function(app) {

    
    // ---------------------------------------------------------------------------
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  

    // ---------------------------------------------------------------------------
  
  app.post("/api/friends", function(req, res) {

    if (friendsData.length < 5) {
    friendsData.push(req.body);
    res.json(true);
    }
  });
};