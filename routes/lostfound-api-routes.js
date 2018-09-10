// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
////////////////////////////////////////////////////////////////
  // GET route for getting all of the losts
  app.get('/api/lost', function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // 1. Add a join here to include all of the User to these posts
    db.LostAndFound.findAll({ include: [ db.User ]},{
      where: query
    }).then(function(dbLost) {
      res.json(dbLost);
    });
  });
////////////////////////////////////////////////////////////////
  // GET route for getting all of the found
  app.get('/api/found', function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // 1. Add a join here to include all of the users who found items
    db.LostAndFound.findAll({ include: [ db.User ]},{
      where: query
    }).then(function(dbFound) {
      res.json(dbFound);
    });
  });
////////////////////////////////////////////////////////////////////////
  // Get route for retrieving a single lost
  app.get('/api/lost/:id', function(req, res) {
    // 2. Add a join here to include the User who Lost an Item
    db.LostAndFound.findOne({ include: [ db.User ]} ,{
      where: {
        id: req.params.id
      }
    }).then(function(dbLostItem) {
      console.log(dbLostItem);
      res.json(dbLostItem);
    });
  });
//////////////////////////////////////////////////////////////////////
   // Get route for retrieving a single found
   app.get('/api/found/:id', function(req, res) {
    // 2. Add a join here to include the User who Lost an Item
    db.LostAndFound.findOne({ include: [ db.User ]} ,{
      where: {
        id: req.params.id
      }
    }).then(function(dbFoundItem) {
      console.log(dbFoundItem);
      res.json(dbFoundItem);
    });
  });

   //////////////////////////////////////////////////

  // POST route for saving a new Lost Item
  app.post('/api/lostpost', function(req, res) {
    db.LostAndFound.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      category: req.body.category,
      subcategory: req.body.subcategory,
      size: req.body.size,
      color: req.body.color,
      attributes: req.body.attributes,
      photo: req.body.photo,
      location: req.body.location,
      description: req.body.description,
      lost:req.body.isLost
    
      }).then(function(dbLostPost) {
      res.json(dbLostPost);
    });
  });


  //////////////////////////////////////////
  // POST route for saving a new Found Item
  app.post('/api/foundpost', function(req, res) {
    db.LostAndFound.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      category: req.body.category,
      subcategory: req.body.subcategory,
      size: req.body.size,
      color: req.body.color,
      attributes: req.body.attributes,
      photo: req.body.photo,
      location: req.body.location,
      description: req.body.description,
      lost:req.body.isLost
    
      }).then(function(dbFoundPost) {
      res.json(dbFoundPost);
    });
  });


  // DELETE route for deleting item
  app.delete('/api/item/:id', function(req, res) {
    db.LostAndFound.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating posts
  app.put('/api/item', function(req, res) {
    db.LostAndFound.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};
