var db = require('../db');

exports.updateBird = (req, res) => {
  // var url = null;
  // if (req.files) {
  //   const { birdImage } = req.files;
  //   birdImage.mv('./public/uploads/' + birdImage.name)
  //   url = req.birdpic_url
  // }

  let body = req.body;
  // if (url) {
  //   db.query('UPDATE user_birds SET birdpic_url = ? WHERE id = ?', [url, body.id])
  // }

  let sql = 'UPDATE user_birds SET bird = ?, street_sighted = ?, city_sighted = ?, state_sighted = ?, notes = ? WHERE id = ?'
  let params = [body.bird, body.street_sighted, body.city_sighted, body.state_sighted, body.notes, body.id];
  db.query(sql, params, (err, result) => {
    if (err) console.log(err);
    res.send('bird updated');
  })
}