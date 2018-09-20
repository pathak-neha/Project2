
require("dotenv").config();
var nodemailer = require('nodemailer');
var newAuth = require("./emailAuth.js");

var emailAuth = newAuth.auth;

console.log("new Auth: "+ JSON.stringify(newAuth));
var transporter = nodemailer.createTransport({
    name: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: emailAuth,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  }
  });
  

module.exports = transporter;  