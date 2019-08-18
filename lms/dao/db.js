var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "lms.cmnn2qojb3cd.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "rootroot",
  database: "lms"
});

module.exports = connection;


 // host: "lms-rds.cmnn2qojb3cd.us-east-2.rds.amazonaws.com",
 //  user: "root",
 //  password: "rootroot",
 //  database: "lms-rds"