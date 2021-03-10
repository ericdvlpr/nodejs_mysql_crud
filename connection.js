const mysql = require("mysql")
var mysqlConnection = mysql.createConnection({
    host   : 'localhost',
    user   : "root",
    port    : 3306,
    password : "P@ssw0rd",
    database : "test",
    multipleStatements : true
})

mysqlConnection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  module.exports = mysqlConnection;