var mysql = require('mysql');
var some = "rootroot";
var connection = mysql.createConnection({
    host     : 'lms-rds.cmnn2qojb3cd.us-east-2.rds.amazonaws.com',
    user     : 'root',
    password : some,
    database : 'lms-rds'
});

module.exports = connection;
