var db = require('../models');

module.exports = function(app) {
  app.get('/api/users', function(req, res) {
    // 1. Add a join to include all of each Users's Items
    db.User.findAll({ include: [ db.LostAndFound ] }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get('/api/users/:id', function(req, res) {
    // 2; Add a join to include all of the Users's Items here
    db.User.findOne({ include: [ db.LostAndFound ]},{
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post('/api/users', function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete('/api/users/:id', function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
