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
    var match = {
      name: "",
      photo: "",
      difference: Infinity
    };
    

    var userData = req.body;
    var userResults = userData.scores;


    var scoreDifference;


    for (var i - 0; i < friendsList.length; i++) {
      var currentFriend = friendsList[i];
      scoreDifference = 0;


    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = userResults[j];


      scoreDifference += Math.ads(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }


    if (scoreDifference <= match.difference) {

      match.name = currentFriend.name;
      match.photo = currentFriend.photo;
      match.difference = scoreDifference;
    }
  });
};