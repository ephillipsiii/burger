// importing orm.js
var orm = require("../config/orm.js");

// ORM functions using burger specific input for the ORM.

var burger ={
    selectAll: function(cb) {
        orm.selectAll("burgers", "date, id", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports= burger;

// export the file