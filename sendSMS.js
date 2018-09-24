var client = require('./smsTransporter.js');
var TeleSignSDK = require('telesignsdk');
function SendSMS(phoneNumber, message, messageType){
    
  var messageCallback = function(error, responseBody) {
    if (error) {
      return error
    }
  };
  client.sms.message(messageCallback, phoneNumber, message, messageType);
}
module.exports = SendSMS;