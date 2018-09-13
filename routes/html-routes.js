// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');
var express = require('express');
var router = express.Router();

// Import the model to use its database functions.
var lost = require('../models/lost.js');
var found = require('../models/found.js');
var user = require('../models/user.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/index', function (req, res) {
  res.render('index');
});

router.get('/found', function (req, res) {
  res.render('found')
});

router.get('/lost', function (req, res) {
  res.render('found')
});

router.get('/browse-items', function (req, res) {
  res.render('lost')
});

router.get('/signIn', function (req, res) {
  res.render('signIn')
});

router.get('/signUp', function (req, res) {
  res.render('signUp')
});

// Export routes for server.js to use.
module.exports = router;
