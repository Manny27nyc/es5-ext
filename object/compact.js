/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var filter  = require("./filter")
  , isValue = require("./is-value");

module.exports = function (obj) {
	return filter(obj, function (val) { return isValue(val); });
};
