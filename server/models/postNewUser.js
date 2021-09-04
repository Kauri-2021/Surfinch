var db = require('../db');

exports.postNewUser = (req, res) => {
  console.log('SIGNUP!', req.body);
  let sql = `INSERT INTO user_profile (username, email, avatar_pic, avatar_background)
               VALUES ('${req.body.name}', '${req.body.email}', '${req.body.pic}', '${req.body.color}')`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
}