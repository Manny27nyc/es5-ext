/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isNaturalNumber = require("./is-natural-number")
  , isValue         = require("./is-value");

module.exports = function (arg) {
	if (!isValue(arg)) return false;
	return isNaturalNumber(arg);
};
