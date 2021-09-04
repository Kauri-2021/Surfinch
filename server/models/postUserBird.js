var db = require('../db');

exports.postUserBird = (req, res) => {
  let sql = `INSERT INTO user_birds (userID, bird, notes, city_sighted, state_sighted)
             VALUES ('${req.body.userID}', '${req.body.bird}', '${req.body.notes}', '${req.body.city_sighted}', '${req.body.state_sighted}');`
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send('Bird Posted to DB');
  })
}