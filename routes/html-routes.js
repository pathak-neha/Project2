// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');
var jwt = require('jsonwebtoken');

// Routes
// =============================================================
var express = require('express');
var router = express.Router();

// Import the model to use its database functions.
var lost = require('../models/lost.js');
var found = require('../models/found.js');
var user = require('../models/user.js');


// lost route loads lost.html

router.get('/auth', verifytoken, function (req, res) {
  console.log(req.headers);
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.json({
        status: '404',

      });
    } else {
     
      res.json({
        status: '200',

      });
    };
  });
  //res.sendFile(path.join(__dirname, '../public/frontend/lost.html'));
});

//Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  res.render('home');
});


router.get('/index', function (req, res) {
  res.render('home');
});

router.get('/found', function (req, res) {
  res.render('found')
});

router.get('/lost', function (req, res) {
  res.render('lost')
});

router.get('/browse-items', function (req, res) {
  res.render('browse')
});

router.get('/SignIn', function (req, res) {
  res.render('SignIn')
});

router.get('/SignUp', function (req, res) {
  res.render('SignUp')
});

router.get("*", function (req, res) {
  res.render('page-404')
});

// Verify Token
function verifytoken(req, res, next) {
  //Get auth header value
  console.log(req.headers);
  const bearerHeader = req.headers['authorization'];
  //Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    //next middleware
    next();

  } else {
    //Forbidden
    res.sendStatus(403);

  }
}

module.exports = router;