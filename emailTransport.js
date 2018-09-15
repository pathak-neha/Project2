
require("dotenv").config();
var nodemailer = require('nodemailer');
var newAuth = require("./emailAuth.js");

var emailAuth = newAuth.auth;
console.log(emailAuth);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: emailAuth
  });
  

module.exports = transporter;  