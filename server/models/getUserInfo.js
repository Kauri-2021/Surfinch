var db = require('../db');

exports.getUserInfo = (req, res) => {
  let sql = `SELECT * FROM user_profile p
               WHERE p.email = '${req.params.email}'`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
}