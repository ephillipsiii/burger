//will setup code to connect Node to MySQL 
//export: module.export()

var mysql = require('mysql');


let connection = {};
console.log(connection);

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
    console.log(connection)
};



connection.connect(function (err) {
    if (err) {
        console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;