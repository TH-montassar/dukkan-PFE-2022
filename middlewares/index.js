const verifyToken = require("./verifyToken");
const isAdmin = require("./isAdmin.js");
const { isMerchant } = require("./isMerchant");
const { isReviewOwner } = require("./isReviewOwner");
const { isCustomer } = require("./isCustomer");

module.exports.verifyToken = verifyToken;
module.exports.isAdmin = isAdmin;
module.exports.isMerchant = isMerchant;
module.exports.isReviewOwner = isReviewOwner;
module.exports.isCustomer = isCustomer;
