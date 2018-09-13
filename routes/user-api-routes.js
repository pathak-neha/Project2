var db = require('../models');
var jwt = require('jsonwebtoken');

module.exports = function(app) {
  app.post('/api/posts', verifytoken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        };
    });
});

app.post('/api/login', (req, res) => {
   db.User.findOne({
        where: {
          email: req.body.email,
            password: req.body.pass
        }
    }).then(function (dbUser,err) {
        console.log("user length: "+dbUser);
        if(dbUser !== null){
        var user = dbUser.username;
        console.log("user in api: "+user);
      
        jwt.sign({ user }, 'secretkey', { expiresIn: '3200s' }, (err, token) => {
          token.trim()+=("_"+dbUser.id);
            res.json({
                token
            });
        });
    }else{
        res.sendStatus(403);
    }
 
    });
});

// Format of token
//Authorization: Bearer <access_token>

// Verify Token
function verifytoken(req, res, next) {
    //Get auth header value
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
  // app.get('/api/users', function(req, res) {
  //   // 1. Add a join to include all of each Users's Items
  //   db.User.findAll({ include: [ db.LostAndFound ] }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // app.get('/api/users/:id', function(req, res) {
  //   // 2; Add a join to include all of the Users's Items here
  //   db.User.findOne({ include: [ db.LostAndFound ]},{
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // app.post('/api/users', function(req, res) {
  //   db.User.create(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // app.delete('/api/users/:id', function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

};
