// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');
var express = require('express');
var router = express.Router();

// Import the model to use its database functions.
var db = require('../models')

// Create all our routes and set up logic within those routes where required.
// ---------- ROUTES FOR 'LOST' TABLE 
router.get('/lost', function (req, res) {
  db.Lost.findAll({include:db.User}).then(function(data){
    res.render('lost',data)
  })
});

router.get('/browse-lost', function (req, res) {
  db.Lost.findAll({include:db.User}).then(function(data){
    res.render('browse',data)
  })
});

router.post('/api/lost', function (req, res) {
  db.Lost.create(req.body).then(function(results){
    res.json(results)
  })
});

router.put('/api/lost/:id', function (req, res) {
  db.Lost.update({
    claimed: true,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (results) {
    res.json(results)
    res.end();
  })
});

// ---------- ROUTES FOR 'FOUND' TABLE 
router.get('/found', function (req, res) {
  db.Found.findAll({include:db.User}).then(function(data){
    res.render('found',data)
  })
});

router.get('/browse-found', function (req, res) {
  db.Lost.findAll({include:db.User}).then(function(data){
    res.render('browse',data)
  })
});

router.post('/api/found', function (req, res) {
  db.Found.create(req.body).then(function(results){
    res.json(results)
  })
});

router.put('/api/found/:id', function (req, res) {
  db.Found.update({
    claimed: true,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (results) {
    res.json(results)
    res.end();
  })
});

// Export routes for server.js to use.
module.exports = router;