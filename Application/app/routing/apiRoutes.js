// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsList = require("../data/friends");


module.exports = function(app) {

    
    // API GET request that handles when a user visits the page
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });
  

    // API POST request that will help display the "perfect" match 
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    var match = {
      name: "",
      photo: "",
      difference: Infinity
    };
    
    // We take the result of the user's survey POST
    var userData = req.body;
    var userResults = userData.scores;

    // Variable used to calculate the difference between the users scores
    // and the scores of the users in the database
    var scoreDifference;

    // For loop to loop through all the possible friends
    for (var i = 0; i < friendsList.length; i++) {
      var currentFriend = friendsList[i];
      scoreDifference = 0;

      console.log(currentFriend.name);

      // For loop to loop through all the friends scores from the database
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userResults[j];

        // Used to calculate the difference the scores and add them to the scoreDifference
        scoreDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of the differences is less than the difference of the current match
      if (scoreDifference <= match.difference) {
        // we reset the match to be the new friend.
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.difference = scoreDifference;
      }
    }

    // We then save the user's data to the database 
    friendsList.push(userData);

    // We use JSON to display the match
    res.json(match);
  });
};