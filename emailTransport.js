
require("dotenv").config();
var nodemailer = require('nodemailer');
var newAuth = require("./emailAuth.js");

var emailAuth = newAuth.auth;

console.log("new Auth: "+ JSON.stringify(newAuth));
var transporter = nodemailer.createTransport(smtpTransport({
    name: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: emailAuth
  })
);
  

module.exports = transporter;  