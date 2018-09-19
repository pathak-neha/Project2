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
var globalData;
var idData =[];
var idQuery;

// Create all our routes and set up logic within those routes where required.
// ---------- ROUTES FOR 'LOST' TABLE 


router.get('/browse-by-id', function(req, res) {
  console.log(req.query);
  idQuery = req.query;
  db.Lost.findAll({
    where: {
      id: req.query.id,
      claimed: 0
    }
  }).then(function(data) {
    console.log("Query: " + idQuery);
    console.log("Lost Data: " + JSON.stringify(data));
    idData.push(data);
    db.Found.findAll({
      where: {
        id: idQuery.id,
        claimed: 0
      }
    }).then(function(result) {
      console.log("Found Data: " + JSON.stringify(result));
      idData.push(result);
      console.log("global Data: " + JSON.stringify(idData));
    })
    console.log('Querying the ID')
  })
});



// router.get('/lost', function (req, res) {
//   db.Lost.findAll({ include: db.User }).then(function (data) {
//     res.render('lost', data)
//   })
// });

router.get('/browse-by-id-result', function(req, res) {
  res.render('browse-results', {lostItems: idData[0], foundItems: idData[1]});
});

router.get('/lost', function (req, res) {
  db.Lost.findAll({ include: db.User }).then(function (data) {
    res.render('lost', data)
  })
});

router.get('/browse-lost-items-result', function(req, res) {
  res.render('browse-results', {lostItems: globalData});
});

router.get('/browse-found-items-result', function(req, res) {
  res.render('browse-results', {foundItems: globalData});
});

router.get('/browse-lost-items', function (req, res) {
  console.log('The request/req.query: ' + JSON.stringify(req.query));
    db.Lost.findAll({
      where: req.query
    }).then(function (data) {
      globalData = data;
      console.log(data);
      console.log('Querying the lost items now...');
    });
  });

router.get('/browse-found-items', function (req, res) {
  console.log('The request/req.query: ' + JSON.stringify(req.query));
  db.Found.findAll({
    where: req.query
  }).then(function (data) {
    globalData = data;
    console.log(data);
    console.log('Querying the found items now...');
  });
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
  db.Found.findAll({ include: db.User }).then(function (data) {
    res.render('found', data)
  })
});

router.get('/browse-found', function (req, res) {
  db.Lost.findAll({ include: db.User }).then(function (data) {
    res.render('browse', data)
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

// TO INPUT A CLAIM
router.post('/api/claim', function (req, res) {
  db.Claim.create(req.body).then(function(results){
    res.json(results)
  });
});

// Export routes for server.js to use.
module.exports = router;