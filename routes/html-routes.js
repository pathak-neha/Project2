// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require('path');

// Routes
// =============================================================
var express = require('express');

var router = express.Router();

// Import the model to use its database functions.
var lost = require('../models/lost.js');
var found = require('../models/found.js');
var user = require('../models/user.js');

// Create all our routes and set up logic within those routes where required.
// ---------- ROUTES FOR 'LOST' TABLE 
router.get('/lost', function (req, res) {
  lost.all(function (data) {
    var hbsObject = {
      lost: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/lost', function (req, res) {
  lost.create(['email', 'category', 'subcategory', 'size', 'color', 'location', 'description'
  ], [
    req.body.email, req.body.category, req.body.subcategory, req.body.size, req.body.color, req.body.location, req.body.description
    ], function (result) {
    res.json({ id: result.insertId });
    });
  
});

router.put('/api/lost/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  lost.update({
    claimed: req.body.claimed
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// ---------- ROUTES FOR 'FOUND' TABLE 
router.get('/found', function (req, res) {
  found.all(function (data) {
    var hbsObject = {
      lost: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/found', function (req, res) {
  found.create(['email', 'category', 'subcategory', 'size', 'color', 'photo', 'location', 'description'
  ], [
    req.body.email, req.body.category, req.body.subcategory, req.body.size, req.body.color, req.body.photo, req.body.location, req.body.description
    ], function (result) {
    res.json({ id: result.insertId });
    });
});

router.put('/api/found/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  found.update({
    claimed: req.body.claimed
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;





// OLD CODE:
// module.exports = function (app) {
// // Each of the below routes just handles the HTML page that the user gets sent to.
  // app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  // });
  // // index route loads index.html

  // app.get('/index', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  // });

  // // app.get('*', function(req, res) {
  // //   res.sendFile(path.join(__dirname, '../public/frontend/index.html'));
  // // });

  // // found route loads found.html
  // app.get('/found', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/found.html'));
  // });

  // // lost route loads lost.html
  // app.get('/lost', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/lost.html'));
  // });

  // app.get('/browse-items', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/browse.html'));
  // });

  // // signIn route loads SignIn.html
  // app.get('/signIn', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/SignIn.html'));
  // });

  // // signUp route loads SignUp.html
  // app.get('/signUp', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/SignUp.html'));
  // });

  // // users route loads user-manager.html
  // app.get('/users', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../public/frontend/user-manager.html'));
  // });
// };

