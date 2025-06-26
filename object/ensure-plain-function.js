/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var safeToString    = require("../safe-to-string")
  , isPlainFunction = require("./is-plain-function");

module.exports = function (value) {
	if (!isPlainFunction(value)) {
		throw new TypeError(safeToString(value) + " is not a plain function");
	}
	return value;
};
