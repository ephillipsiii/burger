//will setup code to connect Node to MySQL 
//export: module.export()

var mysql = require('mysql');


var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connnection = mysql.createConnection({
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
};

connection.connect(function (err) {
    if (err) {
        console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;