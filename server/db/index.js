var mysql = require('mysql2');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password', // or whatever your password is
  database: 'surfinch'
});

connection.connect(function () {
  console.log('Connected to db');
});

module.exports = connection;