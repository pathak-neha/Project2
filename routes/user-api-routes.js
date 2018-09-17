var db = require('../models');
var jwt = require('jsonwebtoken');
var sendmail = require("../sendEmail.js");
var sendsms = require("../sendSMS.js");



var express = require('express');
var router = express.Router();
//module.exports = function (app) {

    router.post('/api/posts', verifytoken, (req, res) => {
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

    router.post('/api/emailValidate', (req, res) => {
        console.log("req.body.email: " + req);
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (dbUser) {
            //console.log(err);

            if (dbUser !== null) {

                res.json({
                    validate: true
                });
            } else {
                res.json({
                    validate: false
                });
            }
        });
    });

    router.post('/api/login', (req, res) => {
        console.log("req.body.email: " + req.body.email);
        db.User.findOne({
            where: {
                email: req.body.email,
                password: req.body.pass
            }
        }).then(function (dbUser) {
               if (dbUser !== null) {
                var user = dbUser.username;
                console.log("user in api: " + user);

                jwt.sign({ user }, 'secretkey', { expiresIn: '15s' }, (err, token) => {
                    // token+=("_"+dbUser.id);
                    console.log("token: " + token);
                    res.json({
                        validate: true,
                        token: token,
                        id: dbUser.id,
                        firstName: dbUser.firstname,
                        lastName: dbUser.lastname,
                        email: dbUser.email
                    });
                });
            }else{
                res.json({
                    validate: true,
                });
            }
        });
    });

    router.post('/api/userpost', (req, res) => {
        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username:  req.body.firstname,
            password: req.body.password
        }).then(function (dbUser) {
            //console.log(err);

            if (dbUser !== null) {
                sendEmailToNewUser(dbUser.email,dbUser.firstname,dbUser.password);
                 var user = dbUser.username;
                console.log("user in api: " + user);
                sendSMS(dbUser.email,dbUser.firstname,dbUser.password);
                jwt.sign({ user }, 'secretkey', { expiresIn: '15s' }, (err, token) => {
                    // token+=("_"+dbUser.id);
                    console.log("token: " + token);
                    res.json({
                        validate: true,
                        token: token,
                        id: dbUser.id,
                        firstName: dbUser.firstname,
                        lastName: dbUser.lastname,
                        email: dbUser.email
                    });
                });
            } else {
                res.json({
                    validate: false
                });
            }

        });
    });


    function sendEmailToNewUser(email, firstName,password){
        var emailBody = 'Hello '+firstName+',\n'+'Welcom to Lost and Found App\n'+'Registration to Lost and Found app is successful\n' +'You can log in by below credentials:\n'
        +'Username: '+email+'\n'
        +'Password: '+password+'\n'
        +'\n'
        +'Regards,\n'
        +'Lost and Found Development Team'
        var emailSubject = firstName+' Welcome to Lost and Found App'
       
        var sendUserEmail = new sendmail(email,emailSubject,emailBody);
        //sendUserEmail.sendMail;
    };

    // Format of token
    //Authorization: Bearer <access_token>
    function sendSMS(email, firstName,password){
        var phoneNumber = "14165709944";
        var message = 'Hello '+firstName+',\n'+'Welcom to Lost and Found App\n'+'Registration to Lost and Found app is successful\n' +'You can log in by below credentials:\n'
        +'Username: '+email+'\n'
        +'Password: '+password+'\n'
        +'\n'
        +'Regards,\n'
        +'Lost and Found Development Team'
        var emailSubject = firstName+' Welcome to Lost and Found App'
        var messageType = "ARN";
        var newsendSMS = new sendsms(phoneNumber,message,messageType);
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

//};
module.exports = router;