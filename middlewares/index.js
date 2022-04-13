const verifyToken = require("./verifyToken");
const isAdmin = require("./isAdmin.js");
const { isMerchant } = require("./isMerchant");

module.exports.verifyToken = verifyToken;
module.exports.isAdmin = isAdmin;
module.exports.isMerchant = isMerchant;
