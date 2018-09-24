var transport = require('./emailTransport.js');

function SendEmail(toEmail,subject,emailBody){
  var mailOptions = {
    from: 'lostfound@app.org',
    to: toEmail,
    subject: subject,
    text: emailBody
  };
  
  this.sendMail = transport.sendMail(mailOptions, function(error, info){
    if (error) {
      return error;
    } else {
      return info.response;
    }
  });
}
module.exports = SendEmail;