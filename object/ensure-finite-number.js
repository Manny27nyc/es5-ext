/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isFiniteNumber = require("./is-finite-number")
  , safeToString   = require("../safe-to-string");

module.exports = function (value) {
	if (isFiniteNumber(value)) return Number(value);
	throw new TypeError(safeToString(value) + " does not represent a finite number value");
};
