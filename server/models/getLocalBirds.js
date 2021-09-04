exports.getLocalBirds = (req, res) => {
  let sql = `SELECT user_profile.username, user_profile.profile_pic_url
               FROM user_profile`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
}