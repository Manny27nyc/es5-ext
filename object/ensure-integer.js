/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toShortString = require("../to-short-string-representation")
  , isInteger     = require("./is-integer");

module.exports = function (num) {
	if (!isInteger(num)) throw new TypeError(toShortString(num) + " is not a integer");
	return Number(num);
};
