const mysql = require('mysql2');

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'al240908',
  database: 'petcare'
});

module.exports = connection;
