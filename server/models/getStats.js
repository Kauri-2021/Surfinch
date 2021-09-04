var db = require('../db');

exports.getStats = (req, res) => {
  let sql = `
  SELECT username,
  avatar_pic,
  avatar_background,
  RANK() OVER (ORDER BY entries DESC) entry_rank,
  RANK() OVER (ORDER BY logins DESC) login_rank
  FROM user_profile`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    var userstats = result.filter(res => res.username === req.params.username);
    res.send(userstats);
  });
}