var db = require('../db');

exports.getUsersBirdInfo = (req, res) => {
  let sql = `SELECT *
             FROM user_birds WHERE userID = ${req.params.userid};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  })
}