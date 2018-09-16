
require("dotenv").config();
var TeleSignSDK = require('telesignsdk');

var client =new TeleSignSDK(process.env.tele_id,process.env.tele_apikey,process.env.tele_rest_endpoint);

console.log("Client: "+client);



module.exports = client;  