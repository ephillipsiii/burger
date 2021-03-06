// import: Express, burger.js
// create router and export router

var express = require('express');
var router = express.Router();

var burger = require("../models/burger.js");

//creating routes

router.get('/', function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index.handlebars", hbsObject);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;