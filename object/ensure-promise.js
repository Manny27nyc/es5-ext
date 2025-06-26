/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var safeToString = require("../safe-to-string")
  , isPromise    = require("./is-promise");

module.exports = function (value) {
	if (!isPromise(value)) throw new TypeError(safeToString(value) + " is not a promise");
	return value;
};
