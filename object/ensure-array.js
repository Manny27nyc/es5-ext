/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toShortString = require("../to-short-string-representation")
  , isArray       = require("./is-array-like");

module.exports = function (value) {
	if (isArray(value)) return value;
	throw new TypeError(toShortString(value) + " is not a array");
};
