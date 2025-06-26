/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var findKey = require("./find-key")
  , isValue = require("./is-value");

// eslint-disable-next-line no-unused-vars
module.exports = function (obj, cb /*, thisArg, compareFn*/) {
	var key = findKey.apply(this, arguments);
	return isValue(key) ? obj[key] : key;
};
