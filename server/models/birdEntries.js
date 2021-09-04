var db = require('../db');

module.exports = {
  createBird: function(req, res) {
    if (req.files) {
      const {birdImage} = req.files;
      birdImage.mv('./public/uploads/' + birdImage.name)
    }

    var body = req.body;

    var queryString = 'INSERT INTO user_birds (bird, street_sighted, city_sighted, state_sighted, notes, latitude, longitude, birdpic_url, userID, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var params = [body.bird, body.street_sighted, body.city_sighted, body.state_sighted, body.notes, body.latitude, body.longitude, body.birdpic_url, req.body.userID, req.body.date];

    db.query(queryString, params, function(err, results, fields) {
      if (err) console.log(err)
      else (res.send())
    })
  },

  getEntries: function(req, res) {
    var userID = req.params.userid;
    var queryString = `SELECT * FROM user_birds WHERE userID = (?)`;
    var params = [userID]
    db.query(queryString, userID, function(err, results, fields) {
      if (err) console.log(err)
      else (res.send(results));
    })
  }
}