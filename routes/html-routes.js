// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get('/', function(req, res) {
    
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
  app.get('/found', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/found.html'));
  });

  // lost route loads lost.html
  app.get('/lost', function(req, res) {
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
   app.get('/signUp', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/SignUp.html'));
  });
  
  // users route loads user-manager.html
  app.get('/users', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/frontend/user-manager.html'));
  });


};
