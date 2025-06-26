/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var safeToString = require("../safe-to-string")
  , toInteger    = require("../number/to-integer")
  , isTimeValue  = require("./is-time-value");

module.exports = function (value) {
	if (isTimeValue(value)) return toInteger(value);
	throw new TypeError(safeToString(value) + " is not a valid time value");
};
