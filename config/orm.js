// will create methods to execute MySQL commands in controllers.
// methods used will include: selectAll(), insertOne(), updateOne()
// will export ORM object: module.exports

//importing mysql 
var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i ++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf("") >=0){
                value -= "'" + value + "'";
            }
        arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

//creating the orm to perform queries in sql
var orm = {
    //select all function to return table entries
    selectAll: function(tableInput, cb) {
        //returning all rows from the table
        var queryString = "SELECT * FROM " + tableInput + ";";
        //querying the database
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    //inserting one table entry
    insertOne: function(table, cols, vals, cb) {
        // query string to insert one row into a table
        var queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        //database query
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //updating one entry in the table
    updateOne: function(table, objColVals, condition, cb){
        //query string updating one entry in the table
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
    // hit that database query!
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
    }
};

module.exports = orm;
