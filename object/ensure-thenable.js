/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var safeToString = require("../safe-to-string")
  , isThenable   = require("./is-thenable");

module.exports = function (value) {
	if (!isThenable(value)) throw new TypeError(safeToString(value) + " is not a thenable");
	return value;
};
