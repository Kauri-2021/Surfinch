var db = require('../db');

exports.incrementCount = (req, res) => {
  let sql = `UPDATE user_profile
             SET entries = entries + 1, logins = logins + 1
             WHERE userID = ${req.body.userID}`;

  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send('Added to login and Entries Count');
  })
}