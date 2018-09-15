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

module.exports = function (app) {
// Each of the below routes just handles the HTML page that the user gets sent to.
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  });
  // index route loads index.html

  app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  });

  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  // });

  // found route loads found.html
  app.get('/found', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/found.html'));
  });

  // lost route loads lost.html
  app.get('/lost/auth', verifytoken, function(req, res) {
    console.log(req.headers);
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.json({
          status: '403',
          
      });
      } else {
          res.json({
            status: '200',
              message: 'Post created...',
              authData
          });
          res.sendFile(path.join(__dirname, '../public/frontend/lost.html'));
      };
  });
    //res.sendFile(path.join(__dirname, '../public/frontend/lost.html'));
  });

  app.get('/lost',function(req, res) {
  
   res.sendFile(path.join(__dirname, '../public/frontend/lost.html'));
     
  });
    

  app.get('/browse-items', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/browse.html'));
  });

  // signIn route loads SignIn.html
  app.get('/signIn', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/SignIn.html'));
  });

  // signUp route loads SignUp.html
  app.get('/signUp', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/SignUp.html'));
  });

  // users route loads user-manager.html
  app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/user-manager.html'));
  });
  
};

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
